import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppThunk } from "store/interfaces";

const UseFetchOnMount = (dispatchFunction: AppThunk): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTypes = async () => {
      await dispatch(dispatchFunction);
    };
    getTypes();
  }, [dispatch, dispatchFunction]);
};

export default UseFetchOnMount;
