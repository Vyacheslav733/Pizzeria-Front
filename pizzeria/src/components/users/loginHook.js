import UsersApiService from "./service/UsersApiService";
import useUser from "./userHook";

const useSubmit = () => {
  const { userLogin } = useUser();
  const onSubmit = async (data) => {
    const res1 = await UsersApiService.getByHandle(data.handle);
    if (res1.length === 0) {
      return 1;
    }
    if (res1[0].password !== data.password) {
      return 2;
    }
    userLogin(res1[0]);
    return 3;
  };
  return { onSubmit };
};

export default useSubmit;