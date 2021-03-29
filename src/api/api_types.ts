import { AnyPtrRecord } from 'dns';

export type api =
  | {}
  | {
      suggestion_list: suggestion[];
      input_suggestion: any;
      subtitle: string;
      title: string;
      seo_details: {
        title: string;
        description: string;
        headline: string;
        meta_robots: any;
        bread_crumbs: any;
        next: string;
        prev: string;
        web_url: string;
        android_url: string;
        canonical: string;
      };
      internal_link_sections: unknown;
      widget_list: widget[];
      last_post_date: number;
      first_post_date: number;
      web_widgets: any;
      banners: any;
      schema: {
        json_schema: {
          additionalProperties: any;
          properties: {
            category: any;
            districts: {
              additionalProperties: any;
              properties: {
                'near-vacancies': any;
                vacancies: {
                  items: {
                    enum: any;
                    enumNames: string[];
                    type: string;
                  };
                  minItems: any;
                  title: any;
                  type: any;
                };
              };
            };
            'has-photo': any;
            'is-store': any;
            price: any;
            query: any;
            urgent: any;
          };
          type: any;
        };
        ui_schema: any;
      };
      jli: any;
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
  image_overlay_tag: unknown;
  image_top_left_tag: unknown;
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
  parent_slug: string;
  slug: string;
  title: string;
  icon_url: null;
  old_meta_id: number;
  second_slug: string;
  relative_url: string;
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
  action_log_payload: any;
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
          business_logo: any;
        };
        description: any;
        description_show_lines: any;
        list_data: productWidgetsListData[];
        location: any;
        images: string[];
        web_images: any;
        breadcrumb: {
          categories: breadcrumbCategory[];
          main_url: string;
          base_url: string;
        };
        contact: any;
        links: productWidgetsLink[];
        messages: any;
        warnings: any;
        car_inspection: any;
        tags: any;
        customer_car_inspection_request: any;
        suggestions: {
          suggestion_available: boolean;
          title: any;
          posts: productSuggestionPost[];
          widget_list: any;
          post_suggestion_extra_logs: any;
        };
        note: any;
      };
      token: string;
      error: number;
    };

export interface productPageData {
  nabz_product_id: unknown;
  business_card_slug: unknown;
  seo: any;
  share: productPageDataShare;
  url: string;
  category: any;
  description: string;
  business_data: any;
  city: string;
  webengage: any;
  district: string;
}

export interface productPageDataShare {
  title: string;
  description: string;
  android_url: string;
  ios_url: string;
  web_url: string;
}
