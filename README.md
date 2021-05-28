# react-native-multi-steps

This component aimed to enable navigating from it's child component using multi step approach which will help in creating multi step forms, viewing item by item etc..

## Installation

```sh
npm install react-native-multi-steps
```

## Usage

```js
import MultiSteps from "react-native-multi-steps";

// ...

//Simple implementation
<MultiSteps 
//Move to the next item
onMoveNext={(data)=>{console.log(data) }} 
//Move to the previous item 
onMovePrevious={(data)=>{console.log(data)}} 
/>

//Whever you need to implement onSubmit
<MultiSteps 
//Move to the next item
onMoveNext={(data)=>{console.log(data) }} 
//Move to the previous item 
onMovePrevious={(data)=>{console.log(data)}} 
//onSubmit is optional, only implement it whever you need to use it
onSubmit={()=>{console.log('Submiting')}}
/>
```
# Example
```js
import { StyleSheet, View, Text } from 'react-native';
import MultiSteps from 'react-native-multi-steps';

export default function App() {

  return (
    <View style={styles.container}>
      <MultiSteps
        onMoveNext={function (data: any): void { console.log("next", data) }}
        onMovePrevious={function (data: any): void { console.log("previous", data) }}
        onSubmit={function () { console.log('Submit') }}>
        <View>
          <Text>
            A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
           </Text>
        </View>
        <View>
          <Text>
            Piedmont, or mountain, glaciers are found in many parts of the world. In North America they are distributed along the mountain ranges of the Pacific Coast from central California northward. They abound in the Andes range in South America and are familiar and greatly admired spectacles in the Alps, the Pyrenees, the Caucasus Mountains and the mountains of Scandanavia. Rivers of ice flow down the valleys of various Asian mountain ranges, including the Himalayas, the Hindu Kush, and the Karakoram and Kunlun ranges. They are also a feature of the Southern Alps of New Zealand and are found in the lofty mountains of New Guinea. The largest piedmont glaciers are the Malaspina and Bering glaciers, both in Alaska. </Text>
        </View>
        <View>
          <Text>
            Scientists' research has revealed that viruses are by far the most abundant life forms on Earth. There are a million times more viruses on the planet than stars in the universe. Viruses also harbor the majority of genetic diversity on Earth. Scientists are finding evidence of viruses as a planetary force, influencing the global climate and geochemical cycles. They have also profoundly shaped the evolution of their hosts. The human genome, for example, contains 100,000 segments of virus DNA.
          </Text>
        </View>
        <View>
          <Text>
            sibusiso love you
          </Text>
        </View>
        <View>
          <Text>
            Scientists' research has revealed that viruses are by far the most abundant life forms on Earth. There are a million times more viruses on the planet than stars in the universe. Viruses also harbor the majority of genetic diversity on Earth. Scientists are finding evidence of viruses as a planetary force, influencing the global climate and geochemical cycles. They have also profoundly shaped the evolution of their hosts. The human genome, for example, contains 100,000 segments of virus DNA.
          </Text>
        </View>
      </MultiSteps>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
