import checkPropTypes from 'check-prop-types';

/**
 * Helper to check props types violation
 *
 * @param {Component} component - common React component
 * @param {Object} conformingProps - component props to be checked
 * @param {String} name - component name. If component wrapped with React.forwardRef, it will lose its name property
 */
export const checkProps = (component, conformingProps, name) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    name || component.name || '`Target component`'
  );
  expect(propError).toBeUndefined();
};
