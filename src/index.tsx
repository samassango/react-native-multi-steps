import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

function RNMultiStep(props: any): any {
  const [stepIndex, setStepIndex] = useState(0);
  const [Component, setComponent] = useState(null);
  const [canMove, setCanMove] = useState({
    canMovePrevious: false,
    canMoveNext: true,
  });
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(
    () => setComponent(props.children[stepIndex]),
    [stepIndex, props.children]
  );

  useEffect(() => setIsSubmit(isSubmit), [props.onSubmit, isSubmit]);

  function onNext(): void {
    let step = stepIndex + 1;
    const len = props.children.length - 1;
    let isNextValid = step === len ? false : true;
    let isPrevious = step > 0 ? true : false;
    let child = props.children[step];
    if (!!child) {
      setCanMove({
        canMoveNext: isNextValid,
        canMovePrevious: isPrevious,
      });
      setStepIndex(step);
    } else {
      step = step + 1;
      isNextValid = step === len ? false : true;
      setCanMove({
        canMoveNext: isNextValid,
        canMovePrevious: isPrevious,
      });
      setStepIndex(step);
    }
    props.onMoveNext(canMove);
  }

  function onPrevious(): void {
    if (stepIndex !== 0) {
      let step = stepIndex - 1;
      let isPreviousValid = step === 0 ? false : true;
      let isNext = step === props.children.length - 1 ? false : true;
      let child = props.children[step];
      if (child) {
        setCanMove({
          canMoveNext: isNext,
          canMovePrevious: isPreviousValid,
        });
        setStepIndex(step);
      } else {
        step = step - 1;
        isPreviousValid = step === 0 ? false : true;
        isNext = step === props.children.length - 1 ? false : true;
        setCanMove({
          canMoveNext: isNext,
          canMovePrevious: isPreviousValid,
        });
        setStepIndex(step);
      }
    }
    props.onMovePrevious(canMove);
  }
  function onSubmit(): void {
    props.onSubmit();
  }
  return (
    <SafeAreaView
      style={props.containerStyle ? props.containerStyle : styles.container}
    >
      {Component !== null ? (
        Component
      ) : (
        <View>
          <ActivityIndicator size="large" />
          <Text>Loading...</Text>
        </View>
      )}
      <View
        style={
          props.containerButtonStyle
            ? props.containerButtonStyle
            : styles.fixToText
        }
      >
        {canMove.canMovePrevious && (
          <TouchableOpacity
            style={props.buttonStyle ? props.buttonStyle : styles.styleBtn}
            onPress={onPrevious}
          >
            <Text
              style={
                props.buttonLabelStyle
                  ? props.buttonLabelStyle
                  : styles.styleBtnLabel
              }
            >
              {props?.config?.previousButtonLabel
                ? props.config.previousButtonLabel
                : 'Previous'}
            </Text>
          </TouchableOpacity>
        )}

        {canMove.canMoveNext && (
          <TouchableOpacity
            style={props.buttonStyle ? props.buttonStyle : styles.styleBtn}
            onPress={onNext}
          >
            <Text
              style={
                props.buttonLabelStyle
                  ? props.buttonLabelStyle
                  : styles.styleBtnLabel
              }
            >
              {props?.config?.nextButtonLabel
                ? props.config.nextButtonLabel
                : 'Next'}
            </Text>
          </TouchableOpacity>
        )}
        {!canMove.canMoveNext && typeof props.onSubmit === 'function' && (
          <TouchableOpacity
            style={props.buttonStyle ? props.buttonStyle : styles.styleBtn}
            onPress={onSubmit}
          >
            <Text
              style={
                props.buttonLabelStyle
                  ? props.buttonLabelStyle
                  : styles.styleBtnLabel
              }
            >
              {props?.config?.submitButtonLabel
                ? props.config.submitButtonLabel
                : 'Submit'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    width: '100%',
    marginVertical: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 30,
  },
  styleBtn: {
    alignItems: 'center',
    backgroundColor: '#1e1ee3',
    borderRadius: 50,
    shadowColor: '#5252d1',
    margin: 10,
    padding: 20,
    width: '40%',
  },
  styleBtnLabel: {
    color: '#f7f7ff',
    fontWeight: 'bold',
  },
});
RNMultiStep.propTypes = {
  children: PropTypes.any,
  containerStyle: PropTypes.object,
  containerButtonStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonLabelStyle: PropTypes.object,
  onMoveNext: PropTypes.func,
  onMovePrevious: PropTypes.func,
  onSubmit: PropTypes.func,
  config: PropTypes.shape({
    nextButtonLabel: PropTypes.string,
    previousButtonLabel: PropTypes.string,
    submitButtonLabel: PropTypes.string,
  }),
};
export default RNMultiStep;
