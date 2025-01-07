import { Modal, ModalProps } from "@mui/material";

interface MDModal extends ModalProps {}

const MDModal: React.FC<MDModal> = (props) => {
  return <Modal {...props} />;
};

export default MDModal;
