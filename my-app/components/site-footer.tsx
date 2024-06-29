export function SiteFooter() {
    return (
      <footer className="py-2 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-12 md:flex-row">
          <p className="text-balance text-left text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="about:blank"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Zypher
            </a>
            .
          </p>
        </div>
      </footer>
    )
  }
  