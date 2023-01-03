import {
	FooterType,
	LayoutType,
	MenuStyle,
	NavStyle,
	ThemeDirection,
	ThemeMode,
	ThemeStyle,
} from '../../../shared/constants/AppEnums';

export const DarkSidebar = {
	sidebarBgColor: '#313541',
	sidebarTextColor: '#fff',
	sidebarHeaderColor: '#313541',
	sidebarMenuSelectedBgColor: '#F4F7FE',
	sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
	mode: ThemeMode.DARK,
};
export const LightSidebar = {
	sidebarBgColor: '#fff',
	sidebarTextColor: '#000',
	sidebarHeaderColor: '#fff',
	sidebarMenuSelectedBgColor: '#9CD8D8',
	sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
	mode: ThemeMode.LIGHT,
};
const defaultConfig = {
	sidebar: {
		borderColor: '#757575',
		menuStyle: MenuStyle.ROUNDED,
		isSidebarBgImage: false,
		sidebarBgImage: 1,
		colorSet: LightSidebar,
	},

	locale: {
		languageId: 'english',
		locale: 'en',
		name: 'English',
		icon: 'us',
	},
	themeStyle: ThemeStyle.STANDARD,
	direction: ThemeDirection.LTR,
	themeMode: ThemeMode.SEMI_DARK,
	footerType: FooterType.FLUID,
	navStyle: NavStyle.MINI,
	layoutType: LayoutType.FULL_WIDTH,
	footer: true,
	rtlLocale: ['ar'],
};
export default defaultConfig;
