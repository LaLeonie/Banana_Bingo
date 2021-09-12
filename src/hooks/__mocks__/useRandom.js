const mockPlants = [];

for (let i = 0; i < 25; i++) {
  mockPlants.push({
    fields: {
      Name: 'apple',
      Type: 'Fruit',
      Color: 'red',
      Image: [
        {
          url: 'https://dl.airtable.com/.attachments/4bb8bc6a4b9e91b9cb80c5886570ca40/1f290e67/Icon_Browncapboletus.png',
        },
      ],
    },
  });
}

export const useRandom = () => {
  return mockPlants;
};
