import UsersApiService from "./service/UsersApiService";
import useUser from "./userHook";

const useSubmit = () => {
  const { userLogin } = useUser();
  const getNewUser = (formData) => {
    const emailt = formData.email;
    const handlet = formData.handle;
    const passwordt = formData.password;
    return {
      email: emailt,
      handle: handlet,
      password: passwordt,
    };
  };
  const onSubmit = async (data) => {
    console.log(data);
    const res1 = await UsersApiService.getByHandle(data.handle);
    if (res1.length !== 0) {
      return 1;
    }
    const res2 = await UsersApiService.getByEmail(data.email);
    if (res2.length !== 0) {
      return 2;
    }
    const newUser = getNewUser(data);
    const curUser = await UsersApiService.create(newUser);
    userLogin(curUser);
    return 3;
  };
  return { onSubmit };
};

export default useSubmit;