import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { catalogStore } from './CatalogStore';
import { headerStore } from './HeaderStore';
import { homePageStore } from './homePageStore';

type Store = {
    lang: 'ua' | 'en';
    setLang: (lang: 'ua' | 'en') => void;
}

export const translateStore = create<Store>()(set =>({
    lang: 'en',
    setLang: (lang) => set({lang})
}));

if (import.meta.env.MODE === 'development') {
	mountStoreDevtool('home page', homePageStore);
	mountStoreDevtool('header', headerStore);
	mountStoreDevtool('catalog', catalogStore);
	mountStoreDevtool('language', translateStore);
}