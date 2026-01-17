import { cn } from "@/lib/utils"

export function GradientBlob({ 
  className, 
  color = "bg-primary/20" 
}: { 
  className?: string, 
  color?: string 
}) {
  return (
    <div 
      className={cn(
        "absolute -z-10 rounded-full blur-3xl opacity-50 pointer-events-none mix-blend-multiply",
        color,
        className
      )} 
    />
  )
}

export function GridPattern({ 
  className, 
  opacity = 0.03 
}: { 
  className?: string, 
  opacity?: number 
}) {
  return (
    <div 
      className={cn("absolute inset-0 -z-20 pointer-events-none", className)}
      style={{ 
        opacity: opacity,
        backgroundImage: 'radial-gradient(#28527A 1px, transparent 1px)', 
        backgroundSize: '32px 32px' 
      }}
    />
  )
}
