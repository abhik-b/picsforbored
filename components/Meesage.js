import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

const Message = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimateSharedLayout>
        {open ? (
          <motion.div
            layoutId="help"
            data-testid="message"
            onClick={() => setOpen(false)}
            initial={{ x: -1000 }}
            exit={{ x: -1000 }}
            animate={{ x: 0 }}
            className="message"
          >
            <h3 style={{ textAlign: "center" }}>Help</h3>
            {props.children}
            <p>
              Tap on any image to open it in it's{" "}
              <b>highest quality available</b>
            </p>
            <p>Tap on anywhere to close a opened image</p>
            <p>
              <b>
                If you change view style please read the help section of that
                view style
              </b>
            </p>
            <p>Tap here to close this message</p>
            <b style={{ fontSize: "12px" }}>
              *All pics here belong to numerous popular subreddits
            </b>
          </motion.div>
        ) : (
          <motion.div
            layoutId="help"
            className="help"
            onClick={() => setOpen(!open)}
          >
            help
          </motion.div>
        )}
      </AnimateSharedLayout>
    </>
  );
};
export default Message;
