import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// import SwiperTop from './Screens/Swiper_Top';
// import TopicHot from './Screens/Topic_Hot';
// import Chart from './Screens/Chart';
// import ChartWeek from './Screens/Chart_Week';
// import MVHot from './Screens/MV_Hot';
// import TopKind from './Screens/Top_Kind';
// import AlbumHot from './Screens/Album_Hot';
// import Suggestion from './Screens/Suggestion';
import HomePage from './Home';
import User from './User';
import Menu from './Menu';
import Search from './Search';
import DetailTopicHot from './Screens/Detail/Detail_TopicHot';
import DetailChart from './Screens/Detail/Detail_Chart';
import DetailChartWeek from './Screens/Detail/Detail_ChartWeek';
import DetailMVHot from './Screens/Detail/Detail_MVHot';
import DetailTopKind from './Screens/Detail/Detail_TopKind';
import DetailAlbumHot from './Screens/Detail/Detail_AlbumHot';
import DetailSuggestion from './Screens/Detail/Detail_Suggestion';
import DetailAlbum from './Screens/Detail/Detail_Album';
import DetailComment from './Screens/Detail/Detail_Comment';
import DetailMV from './Screens/Detail/Detail_MV';
import DetailSong from './Screens/Detail/Detail_Song';

const { width } = Dimensions.get('window');

export const MainStack = StackNavigator({
    Screen_Main: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    }
});

export const UserStack = StackNavigator({
    Screen_User: {
        screen: User,
        navigationOptions: {
            header: null
        }
    }
});

export const SearchStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_Element: {
        screen: UserStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_Search: {
        screen: Search,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailTopicHotStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailTopicHot: {
        screen: DetailTopicHot,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailChartStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailChart: {
        screen: DetailChart,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailChartWeekStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailChartWeek: {
        screen: DetailChartWeek,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailMVHotStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailMVHot: {
        screen: DetailMVHot,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailTopKindStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailTopKind: {
        screen: DetailTopKind,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailALbumHotStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailAlbumHot: {
        screen: DetailAlbumHot,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailSuggestionStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailSuggestion: {
        screen: DetailSuggestion,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailAlbumStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailAlbum: {
        screen: DetailAlbum,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailCommentStack = StackNavigator({
    Screen_DetailAlbum: {
        screen: DetailAlbum,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailComment: {
        screen: DetailComment,
        navigationOptions: {
            header: null
        }
    }
});

export const DetailMVStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailMV: {
        screen: DetailMV,
        navigationOptions: {
            header: null
        }
    },
});

export const DetailSongStack = StackNavigator({
    Screen_Root: {
        screen: MainStack,
        navigationOptions: {
            header: null
        }
    },
    Screen_DetailSong: {
        screen: DetailSong,
        navigationOptions: {
            header: null
        }
    },
});
export const SideMenu = DrawerNavigator(
    {
        MainStackNavigator: {
            screen: MainStack
        },
        UserStackNavigator: {
            screen: UserStack
        },
        SearchStackNavigator: {
            screen: SearchStack
        },
        DetailTopicHotStackNavigator: {
            screen: DetailTopicHotStack
        },
        DetailChartStackNavigator: {
            screen: DetailChartStack
        },
        DetailChartWeekStackNavigator: {
            screen: DetailChartWeekStack
        },
        DetailMVHotStackNavigator: {
            screen: DetailMVHotStack
        },
        DetailTopKindStackNavigator: {
            screen: DetailTopKindStack
        },
        DetailAlbumHotStackNavigator: {
            screen: DetailALbumHotStack
        },
        DetailSuggestionStackNavigator: {
            screen: DetailSuggestionStack
        },
        DetailAlbumStackNavigator: {
            screen: DetailAlbumStack
        },
        DetailCommentStackNavigator: {
            screen: DetailCommentStack
        },
        DetailMVStackNavigator: {
            screen: DetailMVStack
        },
        DetailSongStackNavigator: {
            screen: DetailSongStack
        }
    },
    {
        initialRouteName: 'MainStackNavigator',
        drawerWidth: width * 0.75,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);
