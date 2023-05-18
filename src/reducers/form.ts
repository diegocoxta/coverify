import { logCoverEdit, LogCoverEditEvent as CoverEdit } from '~/utils/analytics';
import ViewProps from '~/components/Covers/views/ViewProps';

type FormReducerType = {
  type: CoverEdit;
  value: string;
};

export const formState: ViewProps = {
  title: '',
  titleColor: '#000000',
  accentColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  image: '',
  spotifyLogo: 'spotifyBlackLogo',
  view: '1',
};

export function formReducer(state = formState, action: FormReducerType): ViewProps {
  logCoverEdit(action.type, action.type !== CoverEdit.image_changed ? action.value : '');

  switch (action.type) {
    case CoverEdit.title_changed:
      return { ...state, title: action.value };
    case CoverEdit.title_color_changed:
      return { ...state, titleColor: action.value };
    case CoverEdit.color_changed:
      return { ...state, accentColor: action.value };
    case CoverEdit.image_changed:
      return { ...state, image: action.value };
    case CoverEdit.spotify_logo_changed:
      return { ...state, spotifyLogo: action.value };
    case CoverEdit.view_changed:
      return { ...state, view: action.value };
    default:
      throw new Error();
  }
}
