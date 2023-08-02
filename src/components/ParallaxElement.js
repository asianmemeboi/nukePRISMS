import { useEffect, useContext } from "react";
import { ScrollContext } from "./ScrollContainer";

var props = function() {
    const context = useContext(ScrollContext);
    useEffect(() => context.addBlock(props), []);
    return props.children;
  };

export default props;