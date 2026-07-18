import { Link } from 'react-router-dom'
import { Package, Clock, Heart } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/layout/PageBanner'

const orders = [
  { id: 'AX-1042', title: 'Family Portrait', size: '50 × 70 cm', status: 'In Production' },
  { id: 'AX-1038', title: 'Typography Print', size: '60 × 90 cm', status: 'Delivered' },
]

export function AccountPage() {
  return (
    <>
      <PageBanner title="Your collection." />

      <div className="min-h-screen bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="mt-0 grid gap-6 md:grid-cols-3">
            {[
              { icon: Package, label: 'Orders', value: '2' },
              { icon: Clock, label: 'In Progress', value: '1' },
              { icon: Heart, label: 'Saved', value: '5' },
            ].map((stat, i) => (
              <Reveal key={stat.label} index={i} className="glass p-8">
                <stat.icon className="h-5 w-5 text-accent-light" />
                <p className="mt-6 font-display text-4xl text-cream">{stat.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
              Recent Orders
            </h2>
            <div className="mt-6 divide-y divide-white/5">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-6"
                >
                  <div>
                    <p className="text-cream">{order.title}</p>
                    <p className="mt-1 font-mono text-[11px] text-cream/30">
                      {order.id} · {order.size}
                    </p>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent-light">
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 text-center">
            <p className="text-cream/40">Sign in to sync your orders across devices.</p>
            <Button variant="default" size="lg" className="mt-6">
              Sign In
            </Button>
            <p className="mt-8">
              <Link
                to="/studio"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light hover:text-cream"
              >
                Or start a new print →
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </>
  )
}
