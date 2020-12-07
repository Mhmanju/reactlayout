import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Element(props) {
  const content = {
    '02_paragraph': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque totam aliquid veritatis assumenda temporibus harum unde!',
    ...props.content
  };
 
  return (
    <Typography variant="body2" paragraph={true}>{content['02_paragraph']}</Typography>
  );
}