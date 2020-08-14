
/* tslint:disable:no-console */
import React from 'react';
import { View } from 'react-native';
import { Button, DatePicker, List } from '../../';

// const now = new Date();

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: undefined,

    };
  }

  ref: any = null

  onChange = (value: any) => {
    this.setState({ value });
  }

  render() {
    return (
      <View>
        <List>
          <Button
            onPress={() => {
              console.log(this.ref.show())
            }}
          >TEST</Button>
          <DatePicker
            value={this.state.value}
            mode="date"
            defaultDate={new Date()}
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            onChange={this.onChange}
            format="YYYY-MM-DD"
            ref={(e) => {
              this.ref = e
            }}
          >
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>

        </List>
      </View>
    );
  }
}
