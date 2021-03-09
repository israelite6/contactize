import React, {useCallback, useState} from 'react';
import {
  Button,
  PermissionsAndroid,
  View,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import Contacts from 'react-native-contacts';
import ContactListItem from '../../Components/ContactListItem';

export default function Startup(props) {
  const [state, setState] = useState({
    isModalVisible: false,
    contacts: [],
    phoneNumber: '',
  });

  const handleSetState = useCallback((data) => {
    setState((prev) => ({...prev, ...data}));
  }, []);

  const handleOpenContact = useCallback(() => {
    if (state.contacts.length === 0) {
      androidPermission();
    } else {
      handleSetState({isModalVisible: true});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleGetContacts();
      }
    } catch (err) {}
  };

  const handleGetContacts = useCallback(() => {
    Contacts.getAll()
      .then((contacts) => {
        console.log(contacts);
        handleSetState({isModalVisible: true, contacts});
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectPhoneNumber = useCallback((phoneNumber) => {
    handleSetState({phoneNumber, isModalVisible: false});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(({item}, index) => {
    return <ContactListItem onPress={handleSelectPhoneNumber} {...item} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Button title="Open Contact" onPress={handleOpenContact} />
      <TextInput value={state.phoneNumber} />
      <Modal visible={state.isModalVisible}>
        <FlatList
          keyExtractor={(item) => item.rawContactId}
          renderItem={renderItem}
          data={state.contacts}
        />
      </Modal>
    </View>
  );
}
