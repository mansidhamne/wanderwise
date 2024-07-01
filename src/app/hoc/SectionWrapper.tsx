import { motion } from "framer-motion";
import { ComponentType } from "react";

const SectionWrapper = (Component: ComponentType<any>, idName: string) =>
  function HOC(props: any) {
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