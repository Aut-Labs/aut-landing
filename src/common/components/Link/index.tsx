import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { base, themed } from '../base';
import NextLink from "next/link";

const LinkWrapper = styled(NextLink)(
  { textDecoration: 'none', alignItems: 'center', cursor: 'pointer' },
  base,
  themed('Link')
);

const Link = ({ children, alignItems, m = 0, display = 'inline-flex', ...props }: any) => (
  <LinkWrapper m={m} display={display} {...props}>{children}</LinkWrapper>
);

export default Link;

Link.propTypes = {
  children: PropTypes.any.isRequired,
};
