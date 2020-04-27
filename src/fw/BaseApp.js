import { ref } from "@vue/composition-api";
import BaseService from "../service/BaseService";

export const BaseApp = (id) => {
  let map = ref({});
  let sId = "";
  const getServiceId = () => {
    return sId;
  };

  const onLoad = () => {
    sId = id;
    BaseService.getEvent(id).then((result) => {
      console.log(result.data);
      map.value = result.data;
    });
  };

  onLoad();
  return { map, getServiceId };
};
