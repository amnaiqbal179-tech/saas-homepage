// 2. Practise string, number, boolean, arrays, and object types.
export const appName: string = "Figma Homepage";
export const version: number = 1.0;
export const isProduction: boolean = false;
export const tags: string[] = ["design", "prototype", "dev-mode"];

type User = {
    id: number;
    name: string;
};

export const currentUser: User = { id: 1, name: "Admin" };

// 3. NavigationItem interface & Array
export interface NavigationItem {
    label: string;
    url: string;
}

export const navItems: NavigationItem[] = [
    { label: "Home", url: "/" },
    { label: "Features", url: "/features" },
    { label: "Pricing", url: "/pricing" }
];

// 4. ButtonVariant union type
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

// 5. HeroContent interface
export interface HeroContent {
    title: string;
    description: string;
    ctaText: string;
}

// 6. Typed function
export function getNavigationLabels(items: NavigationItem[]): string[] {
    return items.map((item) => item.label);
}
export interface ButtonProps {
  label: string;
  variant: ButtonVariant;
  disabled?: boolean;
}