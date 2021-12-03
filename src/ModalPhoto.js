import { Avatar, Button, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function ModalPhoto(props) {
  const { showModalPhoto, onHidden, endPointImage } = props;
  const [photoDog, setPhotoDog] = useState("");

  endPointImage === ""
    ? null
    : useEffect(() => {
        fetch(`https://dog.ceo/api/breed/hound/images`)
          .then((response) => response.json())
          .then((json) => setPhotoDog(json.message));
      }, [endPointImage]);

  console.log(photoDog);

  return (
    <Modal isOpen={showModalPhoto} onClose={() => onHidden()}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>{endPointImage}</Modal.Header>
        {photoDog?.length < 1 ? (
          <Modal.Body>{`Anjing ${endPointImage} hanya satu jenis`}</Modal.Body>
        ) : // <FlatList
        //   data={photoDog}
        //   renderItem={({ item }) => (
        //     <Avatar
        //       size="48px"
        //       source={{
        //         uri: photoDog,
        //       }}
        //     />
        //   )}
        // />
        // { photoDog }
        null}
      </Modal.Content>
    </Modal>
  );
}
