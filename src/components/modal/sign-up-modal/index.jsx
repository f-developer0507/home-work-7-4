import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { cloneElement, forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const Fade = forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Index({ open, handleClose }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      navigate("sign-in");
    }, 3000);
  };

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="spring-modal-title"
              variant="h5"
              component="h2"
              className="text-center text-[#46A358]"
              sx={{ marginBottom: "20px", textAlign: "center" }}
            >
              Enter Your Code
            </Typography>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full h-[40px] pt-3 pb-3 pl-[14px] text-[15px] mb-[20px] leading-[16px] rounded-[6px] border-[1px] border-[#EAEAEA] text-black placeholder:text-[#A5A5A5] focus:border-[#46A358] outline-0"
                type="number"
                name="code"
                placeholder="Code"
                required
                autoComplete="off"
              />
              <button
                type="submit"
                className="w-full h-[45px] font-medium bg-[#46A358] border-[transparent] border-[1px] text-[#fff] rounded-[5px] hover:bg-[transparent] hover:border-[#46A358] hover:text-[#46A358] active:relative active:top-[1px]"
              >
                Register
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
