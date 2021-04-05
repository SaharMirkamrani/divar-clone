export type api =
  | {}
  | {
      suggestion_list: suggestion[];
      seo_details: {
        next: string;
      };
      widget_list: widget[];
      schema: {
        json_schema: {
          properties: {
            districts: {
              properties: {
                vacancies: {
                  items: {
                    enumNames: string[];
                    type: string;
                  };
                };
              };
            };
          };
        };
      };
    };
export interface widget {
  widget_type: string;
  data: widget_data;
}

export interface suggestion {
  displayed_text: string;
  value: suggestion_data;
}

export interface widget_data {
  title: string;
  image: string;
  web_image: { src: string; type: string }[];
  description: string;
  has_chat: boolean;
  red_text: string;
  normal_text: string;
  token: string;
  index: number;
  city: string;
  district: string;
  category: string;
}

export interface suggestion_data {
  category: { value: string };
}

export interface Submenu_data {
  id: number;
  title: string;
  info: { header: string; list: string[] }[];
  footer: string;
}

export interface breadcrumbCategory {
  title: string;
  icon_url: null;
}

export interface productWidgetsListData {
  title: string;
  format: string;
  value: string;
}

export interface productWidgetsLink {
  title: string;
  url: string;
  relative_url: string;
}

export interface productSuggestionPost {
  bottom_text: string;
  title: string;
  image: string;
  action: string;
  post_view_payload: {
    token: string;
  };
  token: string;
  middle_text: string;
}

export type productPage =
  | {}
  | {
      data: productPageData;
      widgets: {
        header: {
          date: string;
          subtitle: string;
          title: string;
          thumbnail: string;
          place: string;
        };
        list_data: productWidgetsListData[];
        images: string[];
        breadcrumb: {
          categories: breadcrumbCategory[];
        };
        links: productWidgetsLink[];
        suggestions: {
          suggestion_available: boolean;
          posts: productSuggestionPost[];
        };
      };
      token: string;
      error: number;
    };

export interface productPageData {
  share: productPageDataShare;
  url: string;
  description: string;
  city: string;
}

export interface productPageDataShare {
  title: string;
  description: string;
}
