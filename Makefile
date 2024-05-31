# SPDX-License-Identifier: MIT

VERSION=$(shell sed -n '/"version"/ s/.*: "\(.*\)",/\1/p' manifest.json)
ADDON=reply-all-button-$(VERSION).xpi

JS_DIRS=scripts options

xpi: $(ADDON)

%.xpi: \
	manifest.json \
	README.md LICENSE \
	icons/*.svg \
	$(addsuffix /*,$(JS_DIRS))
	zip -q -r $@ $^

clean:
	rm -f -- $(ADDON)

.PHONY: xpi clean
