import { toast } from 'react-toastify';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Rating from '../Rating';
import { createFeedback } from '../../services/api';
import './Modal.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ setShowModal,showModal }) {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [feedback, setFeedback] = React.useState('');
  const [name, setName] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setShowModal(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!name || !feedback || !rating) {
        toast.error('Please fill all the fields');
        return;
      }
      const data = {
        name,
        feedback,
        rating: rating,
      };
      await createFeedback(data);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div onClick={handleOpen} className="border-0 p-4   " >
      <button

        className="bg-red-500 text-white  rounded-lg border-2  hover:text-red "
      >
        Give Feedback
      </button>
      <Modal
        open={showModal}
        onClose={() => {
          handleClose();
          setShowModal(false);
        }}
      >
        <Box sx={style}>
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  name=""
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Name : </label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name=""
                  required=""
                  onChange={(e) => setFeedback(e.target.value)}
                />
                <label>Feedback : </label>
              </div>
              <div className="user-box">
                <Rating setStarRating={setRating} />
              </div>
              <div className="flex justify-center">
                <a className="cursor-pointer" onClick={handleSubmit}>
                  Send Feedback
                </a>
                {/* <a
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </a> */}
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
