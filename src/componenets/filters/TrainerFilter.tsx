import React, {useReducer, useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {selectSvg} from '../../utils';
import {
  Colors,
  ESports,
  momentDashedDateFormat,
  momentDateTimeFormat,
} from '../../constants';
import SelectDropdown from 'react-native-select-dropdown';
import {Calendar} from 'react-native-calendars';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {map} from 'lodash';

const initialFilters = {
  sport: '',
  date: 0,
  rating: 0,
};

const filterReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'sport':
      return {...state, sport: action.payload};
    case 'date':
      return {...state, date: action.payload};
    case 'rating':
      return {...state, rating: action.payload};
    case 'reset':
      return initialFilters;
    default:
      return state;
  }
};

interface IProps {
  sport?: string;
}
const TrainerFilter: React.FC<IProps> = ({sport}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const [filters, filtersDispatch] = useReducer(filterReducer, {
    ...initialFilters,
    sport: sport || '',
  });

  const handleSportChange = (sport: string) => {
    console.log('sport', sport);
    filtersDispatch({type: 'sport', payload: sport});
  };

  const handleDateChange = (date: number) => {
    filtersDispatch({type: 'date', payload: date});
  };

  const handleRatingChange = (rating: number) => {
    setShowRating(false);
    console.log(rating);
    filtersDispatch({type: 'rating', payload: rating});
  };

  const handleResetFilters = () => {
    filtersDispatch({type: 'reset', payload: ''});
  };

  return (
    <View style={{height: 35, display: 'flex', flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={handleResetFilters}
        style={{
          width: 35,
          height: 35,
          backgroundColor: Colors.priwinkleBlue,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {selectSvg('close', {
          style: {position: 'absolute', color: Colors.white},
          height: 15,
          width: 15,
        })}
      </TouchableOpacity>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 35,
        }}
        style={{
          overflow: 'visible',
          height: 35,
        }}>
        <View
          style={{
            height: 35,
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowColor: Colors.black,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          }}>
          <SelectDropdown
            data={map(ESports, sport => sport)}
            // defaultValueByIndex={1}
            defaultValue={filters.sport}
            onSelect={(selectedItem, _) => {
              handleSportChange(selectedItem);
            }}
            defaultButtonText={'Sport'}
            buttonTextAfterSelection={(selectedItem, _) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, _) => {
              return item;
            }}
            buttonStyle={{
              backgroundColor: filters.sport.length
                ? Colors.blueZodiac
                : Colors.white,
              borderRadius: 10,
              height: 35,
              width: 120,
              transform: [],
            }}
            buttonTextStyle={{
              color: filters.sport.length ? Colors.white : Colors.blueZodiac,
              fontSize: 12,
              fontWeight: '700',
            }}
            renderDropdownIcon={isOpened => {
              return selectSvg('chevron-bottom', {
                style: {
                  color: Colors.priwinkleBlue,
                  transform: isOpened ? 'rotate(-180deg)' : '',
                },
              });
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={{
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: Colors.white,
            }}
            rowStyle={{
              backgroundColor: Colors.white,
              height: 35,
              borderBottomColor: Colors.blueZodiac,
            }}
            rowTextStyle={{
              color: Colors.blueZodiac,
              textAlign: 'center',
              fontSize: 12,
              fontWeight: '500',
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            setShowRating(false);
            setShowCalendar(!showCalendar);
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginLeft: 10,
            width: 120,
            height: 35,
            backgroundColor: filters.date ? Colors.blueZodiac : Colors.white,
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowColor: Colors.black,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          }}>
          <Text
            style={{
              color: filters.date ? Colors.white : Colors.blueZodiac,
              fontSize: 12,
              fontWeight: '700',
            }}>
            {filters.date
              ? moment(filters.date).format(momentDateTimeFormat)
              : 'Select Date'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowCalendar(false);
            setShowRating(!showRating);
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginLeft: 10,
            width: 120,
            height: 35,
            backgroundColor: filters.rating ? Colors.blueZodiac : Colors.white,
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowColor: Colors.black,
            shadowOffset: {
              width: 0,
              height: 0,
            },
          }}>
          <Text
            style={{
              color: filters.rating ? Colors.white : Colors.blueZodiac,
              fontSize: 12,
              fontWeight: '700',
            }}>
            {filters.rating ? (
              <AirbnbRating
                size={15}
                showRating={false}
                defaultRating={filters.rating}
                starContainerStyle={{
                  padding: 0,
                  margin: 0,
                  height: 35,
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 5,
                }}
              />
            ) : (
              'Rating'
            )}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          display: showCalendar ? 'flex' : 'none',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          shadowColor: Colors.black,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          width: 300,
          top: 50,
          position: 'absolute',
          left: Dimensions.get('screen').width / 2,
          transform: [{translateX: -170}],
        }}>
        <Calendar
          markedDates={{
            [moment(filters.date).format(momentDashedDateFormat)]: {
              selected: true,
              selectedColor: Colors.blueZodiac,
            },
          }}
          style={{
            borderRadius: 10,
            width: 300,
          }}
          onDayPress={day => {
            setShowCalendar(false);
            handleDateChange(day.timestamp);
          }}
        />
      </View>

      <View
        style={{
          display: showRating ? 'flex' : 'none',
          padding: 10,
          backgroundColor: Colors.white,
          borderRadius: 10,
          shadowOpacity: 0.1,
          shadowRadius: 5,
          shadowColor: Colors.black,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          top: 50,
          position: 'absolute',
          left: Dimensions.get('screen').width / 2,
          transform: [{translateX: -100}],
        }}>
        <Rating
          ratingCount={5}
          showRating={false}
          startingValue={filters.rating}
          onFinishRating={handleRatingChange}
          imageSize={25}
        />
      </View>
    </View>
  );
};

export default TrainerFilter;
