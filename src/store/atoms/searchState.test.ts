import { renderHook } from '@testing-library/react-hooks';import { snapshot_UNSTABLE, RecoilRoot, useRecoilState } from 'recoil';import { useEffect } from 'react';import moment from 'moment';import faker from 'faker';import { searchState, applyDefaultValues, SearchState } from './searchState';describe('Search state', () => {  it('should handle default state', () => {    const initialSnapshot = snapshot_UNSTABLE();    expect(initialSnapshot.getLoadable(searchState).valueOrThrow())      .toEqual(applyDefaultValues());  });  it('should set/get state values', () => {    const changedState: SearchState = {      results: [{        id: 1,        posterPath: faker.image.imageUrl(),        title: faker.name.findName(),        overview: faker.lorem.sentences(),        releaseDate: moment(faker.time.recent()),        firstAirDate: moment(faker.time.recent()),        voteAverage: 5      }],      searchValue: '',      loading: true,      silentLoading: true,      page: 2,      totalPages: 10,      error: null    };    const { result } = renderHook(() => {      const [state, setState] = useRecoilState(searchState);      useEffect(() => {        setState({          ...applyDefaultValues(),          ...changedState        });      }, [setState]);      return state;    }, {      wrapper: RecoilRoot    });    expect(result.current).toEqual({      ...applyDefaultValues(),      ...changedState    });  });});export {};