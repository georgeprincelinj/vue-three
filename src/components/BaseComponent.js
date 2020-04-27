import { ref } from "@vue/composition-api";

export const BaseComponent = () => {
  const isDisplayed = ref(true);

  const setDisplayed = (value) => {
    isDisplayed.value = value;
  };

  return { isDisplayed, setDisplayed };
};
