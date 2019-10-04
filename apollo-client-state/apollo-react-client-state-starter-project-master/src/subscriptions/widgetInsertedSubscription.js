import React from 'react';
import gql from 'graphql-tag';

import { SubscriptionInfoNotification } from './index'
import { WIDGETS_QUERY } from './queries';

const WIDGET_INSERTED_SUBSCRIPTION = gql`
  subscription WidgetInserted {
    widgetInserted {
      id
      name
    }
  }
`;

export const WidgetInsertedSubscription = () => 
    <SubscriptionInfoNotification 
    subscription={WIDGET_INSERTED_SUBSCRIPTION} 
    refetchQueries={[{ query: WIDGETS_QUERY }]}>
    {({ widgetInserted: { name } }) => <span>A widget named {name} was inserted!</span>}
    </SubscriptionInfoNotification>;