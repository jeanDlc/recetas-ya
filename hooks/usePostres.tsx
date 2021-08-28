import React, { useState, useEffect } from "react";
import postresJson from "../constants/postres.json";
import { Receta } from "../interfaces";
export const usePostres = () => {
  const [postres, setPostres] = useState<Receta[]>([]);
  useEffect(() => {
    setPostres(postresJson);
  }, []);
  return { postres };
};
