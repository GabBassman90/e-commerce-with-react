import { useState } from "react";

const useSidebar = () => {
  const [open, setOpen] = useState<boolean>(false);



  console.log(open)
  return [open, setOpen];
};

export default useSidebar;
