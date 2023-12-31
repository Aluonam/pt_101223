
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ButtonModalANT = ({colorSelected}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Show color
      </Button>
      <Modal title="The selected color is:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div style={{width:"90%", height:"100px", backgroundColor:`${colorSelected}`}}></div>
      </Modal>
    </>
  );
};
export default ButtonModalANT;
