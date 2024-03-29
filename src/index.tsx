import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function isNextItem(step: number, len: number): boolean {
  return !(step === len);
}
function isPreviousValidItem(step: number): boolean {
  return !(step === 0);
}
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
    let isNextValid = isNextItem(step, len);
    let isPrevious = step > 0 ? true : false;
    let child = props.children[step];
    if (child) {
      setCanMove({
        canMoveNext: isNextValid,
        canMovePrevious: isPrevious,
      });
      setStepIndex(step);
    } else {
      step = step + 1;
      isNextValid = isNextItem(step, len);
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
      let isPreviousValid = isPreviousValidItem(step); //step === 0 ? false : true;
      let isNext = isNextItem(step, props.children.length - 1);
      let child = props.children[step];
      if (child) {
        setCanMove({
          canMoveNext: isNext,
          canMovePrevious: isPreviousValid,
        });
        setStepIndex(step);
      } else {
        step = step - 1;
        isPreviousValid = isPreviousValidItem(step);
        isNext = isNextItem(step, props.children.length - 1);
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
      {Component ? (
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
            style={
              props.prevButtonStyle
                ? props.prevButtonStyle
                : styles.prevStyleBtn
            }
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
            style={
              props.nextButtonStyle
                ? props.nextButtonStyle
                : styles.nextStyleBtn
            }
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
            style={
              props.submitButtonStyle
                ? props.submitButtonStyle
                : styles.submitStyleBtn
            }
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
  prevStyleBtn: {
    alignItems: 'center',
    backgroundColor: '#1e1ee3',
    borderRadius: 50,
    shadowColor: '#5252d1',
    margin: 10,
    padding: 20,
    width: '40%',
  },
  submitStyleBtn: {
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 50,
    shadowColor: '#5252d1',
    margin: 10,
    padding: 20,
    width: '40%',
  },
  nextStyleBtn: {
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
  prevButtonStyle: PropTypes.object,
  nextButtonStyle: PropTypes.object,
  submitButtonStyle: PropTypes.object,
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
