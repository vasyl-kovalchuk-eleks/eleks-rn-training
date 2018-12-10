export const CustomTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [.8, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0.8, 1, 1]),
    });

    return {
        opacity,
        transform: [
            {scaleY}
        ]
    };
};

export const Horizontal = (index, position) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [-100, 0, 100],
  });

  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
    outputRange: [0, 1, 1, 0.3, 0],
  });

  return { opacity, transform: [{ translateX }] };
};



export const TransitionConfiguration = () => {
    return {
        screenInterpolator: (sceneProps) => {

            const {position, scene} = sceneProps;
            const {index, route} = scene
            const params = route.params || {}; 
            const transition = params.transition || 'horizontal';

            return {
                // CustomTransition: CustomTransition(index, position),
                horizontal: Horizontal(index, position),
            }[transition];
        }
    }
};