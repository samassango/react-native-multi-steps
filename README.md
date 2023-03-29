# react-native-multi-steps

This component aimed to enable navigating from it's child component using multi step approach which will help in creating multi step forms, viewing item by item etc..

The new version of react-native-multi-steps now support conditional rendering.

![Preview](https://github.com/samassango/react-native-multi-steps/blob/main/screenshot.gif)


## Installation

```sh
npm install react-native-multi-steps
```

## Usage
### NB: buttonstyle is deprecated from this verison 0.1.8. 
It will be replaced by nextButtonStyle, previousButtonStyle and submitButtonStyle. This change will Developers to have controll on how they want to customize each and every button. All thanks to [Anand Kumar](https://github.com/anand-netzoptimize) our new contributor
## props


| Props                  | Optional | Type          | Description                                                                    |
| ---------------------- | -------- | ------------- | ------------------------------------------------------------------------------ |
| containerStyle         | ``Yes``  | ``Object``    | Used to style the components container                                         |
| containerButtonStyle   | ``Yes``  | ``Object``    | Used to style the button container                                             |
| buttonStyle            | ``Yes``  | ``Object``    | Used to style the button  ``Deprecated``                                       |
| prevButtonStyle        | ``Yes``  | ``Object``    | Used to style the button                                                       |
| nextButtonStyle        | ``Yes``  | ``Object``    | Used to style the button                                                       |
| submitButtonStyle      | ``Yes``  | ``Object``    | Used to style the button                                                       |
| buttonLabelStyle       | ``Yes``  | ``Object``    | Used to style the button label                                                 |
| onMoveNext             | ``No``   | ``function``  | Moving to the next child view                                                  |
| onMovePrevious         | ``No``   | ``function``  | Moving to the previous child view                                              |
| onSubmit               | ``Yes``  | ``function``  | Called on submit only when the function is available as a property             |
| config                 | ``Yes``  | ``Object``    | Config buttons label to your specification eg: rename button                   |

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

//Implementation with config object
<MultiSteps 
//Move to the next item
onMoveNext={(data)=>{console.log(data) }} 
//Move to the previous item 
onMovePrevious={(data)=>{console.log(data)}} 
//onSubmit is optional, only implement it whever you need to use it
onSubmit={()=>{console.log('Submiting')}}
config ={{
   nextButtonLabel: 'Next Section',
    previousButtonLabel: 'Previous Section',
    submitButtonLabel: 'Done'
}}
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
        containerButtonStyle={styles.containerButtonStyle}
        onMoveNext={function (data: any): void { console.log("next", data) }}
        onMovePrevious={function (data: any): void { console.log("previous", data) }}
        onSubmit={function () { console.log('Submit') }}>
        <View>
          <Text>
            A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
           </Text>
        </View>
        {show && (
        <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Show this section
          </Text>
          <Text>
            Piedmont, or mountain, glaciers are found in many parts of the 
            world. In North America they are distributed along the mountain
            ranges of the Pacific Coast from central California northward. They
            abound in the Andes range in South America and are familiar and
            greatly admired spectacles in the Alps, the Pyrenees, the Caucasus
            Mountains and the mountains of Scandanavia. Rivers of ice flow down
            the valleys of various Asian mountain ranges, including the
            Himalayas, the Hindu Kush, and the Karakoram and Kunlun ranges. They
            are also a feature of the Southern Alps of New Zealand and are found
            in the lofty mountains of New Guinea. The largest piedmont glaciers
            are the Malaspina and Bering glaciers, both in Alaska.
          </Text>
        </View>
        )}
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
 containerButtonStyle:{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingLeft: 10,
          paddingRight: 30,
        }
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
