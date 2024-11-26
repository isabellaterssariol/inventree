export interface ButtonProps {
  children: React.ReactNode;
  loading: boolean;
  type: "submit";
  className?: string;
  disabled?: boolean;
}
