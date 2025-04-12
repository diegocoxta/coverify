import ViewProps from '~/components/Covers/views/ViewProps';

type FormReducerType = {
  type: LogCoverEditEvent;
  value: string;
};

export enum LogCoverEditEvent {
  TITLE_CHANGED,
  TITLE_COLOR_CHANGED,
  COLOR_CHANGED,
  IMAGE_CHANGED,
  STREAMING_SERVICE_LOGO_CHANGED,
  VIEW_CHANGED,
}

export const formState: ViewProps = {
  title: '',
  titleColor: '#000000',
  accentColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  image: '',
  spotifyLogo: 'spotifyBlackLogo',
  view: '1',
};

export function formReducer(state = formState, action: FormReducerType): ViewProps {
  switch (action.type) {
    case LogCoverEditEvent.TITLE_CHANGED:
      return { ...state, title: action.value };
    case LogCoverEditEvent.TITLE_COLOR_CHANGED:
      return { ...state, titleColor: action.value };
    case LogCoverEditEvent.COLOR_CHANGED:
      return { ...state, accentColor: action.value };
    case LogCoverEditEvent.IMAGE_CHANGED:
      return { ...state, image: action.value };
    case LogCoverEditEvent.STREAMING_SERVICE_LOGO_CHANGED:
      return { ...state, spotifyLogo: action.value };
    case LogCoverEditEvent.VIEW_CHANGED:
      return { ...state, view: action.value };
    default:
      throw new Error();
  }
}
