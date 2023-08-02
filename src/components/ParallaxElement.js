import { useEffect, useContext } from "react";
import { ScrollContext } from "./ScrollContainer";

var Thing = props => {
    const context = useContext(ScrollContext);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => context.addBlock(props), []);
    return props.children;
  };

export default Thing;