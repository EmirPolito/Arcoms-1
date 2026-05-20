"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectContextValue {
    value: string;
    onValueChange: (value: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelectContext() {
    const context = React.useContext(SelectContext);
    if (!context) {
        throw new Error("Select components must be used within a Select");
    }
    return context;
}

interface SelectProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
}

const Select = ({ value, defaultValue, onValueChange, children }: SelectProps) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const [open, setOpen] = React.useState(false);

    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = React.useCallback((newValue: string) => {
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onValueChange?.(newValue);
        setOpen(false);
    }, [value, onValueChange]);

    return (
        <SelectContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, open, setOpen }}>
            <div className="relative">
                {children}
            </div>
        </SelectContext.Provider>
    );
};

const SelectGroup = ({ children }: { children: React.ReactNode }) => (
    <div role="group">{children}</div>
);

interface SelectValueProps {
    placeholder?: string;
    children?: React.ReactNode;
}

const SelectValue = ({ placeholder, children }: SelectValueProps) => {
    const { value } = useSelectContext();
    return <span>{children || value || placeholder}</span>;
};

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const { open, setOpen } = useSelectContext();

        return (
            <button
                ref={ref}
                type="button"
                onClick={() => setOpen(!open)}
                className={cn(
                    "flex h-10 w-full items-center justify-between rounded-md border border-neutral-300 dark:border-neutral-600 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                    className
                )}
                {...props}
            >
                {children}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn("opacity-50 transition-transform", open && "rotate-180")}
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
        );
    }
);
SelectTrigger.displayName = "SelectTrigger";

interface SelectContentProps {
    children: React.ReactNode;
    className?: string;
}

const SelectContent = ({ children, className }: SelectContentProps) => {
    const { open, setOpen } = useSelectContext();
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!open) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
                const trigger = contentRef.current.previousElementSibling;
                if (trigger && !trigger.contains(event.target as Node)) {
                    setOpen(false);
                }
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [open, setOpen]);

    if (!open) return null;

    return (
        <div
            ref={contentRef}
            className={cn(
                "absolute left-0 top-full z-[9999] mt-1 max-h-96 w-full overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
                className
            )}
        >
            <div className="p-1">
                {children}
            </div>
        </div>
    );
};

interface SelectLabelProps {
    children: React.ReactNode;
    className?: string;
}

const SelectLabel = ({ children, className }: SelectLabelProps) => (
    <div className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}>
        {children}
    </div>
);

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
    ({ value, children, className, disabled }, ref) => {
        const { value: selectedValue, onValueChange } = useSelectContext();
        const isSelected = selectedValue === value;

        return (
            <div
                ref={ref}
                role="option"
                aria-selected={isSelected}
                data-disabled={disabled || undefined}
                onClick={() => !disabled && onValueChange(value)}
                className={cn(
                    "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 sm:pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                    isSelected && "bg-accent text-accent-foreground",
                    disabled && "pointer-events-none opacity-50",
                    className
                )}
            >
                <span className="absolute left-2 hidden sm:flex h-3.5 w-3.5 items-center justify-center">
                    {isSelected && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 6 9 17l-5-5" />
                        </svg>
                    )}
                </span>
                {children}
            </div>
        );
    }
);
SelectItem.displayName = "SelectItem";

const SelectSeparator = ({ className }: { className?: string }) => (
    <div className={cn("-mx-1 my-1 h-px bg-muted", className)} />
);

const SelectScrollUpButton = () => null;
const SelectScrollDownButton = () => null;

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
};
