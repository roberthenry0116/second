

export const desktopOS = [
    {
      label: 'Javascript',
      value: 40, 
      colors: "red",
    },
    {
      label: 'HTML',
      value: 20,
      colors: "wheat",
    },
    {
      label: 'PHP',
      value: 10,
      colors: "black",
    },
    {
      label: 'CSS',
      value: 15,
      colors: "green",
    },
    {
      label: 'Other',
      value: 15,
      colors: "blue",
    },
  ];
    export const colorFormatter = (item) => `${item.colors}`;
  export const valueFormatter = (item) => `${item.value}%`;