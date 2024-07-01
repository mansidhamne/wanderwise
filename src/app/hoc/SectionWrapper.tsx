import { motion } from "framer-motion";

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <section>
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </section>
    );
  };

export default SectionWrapper;