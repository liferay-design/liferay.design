import React from 'react'

const CapitalizationTool = ({}) => {
	function TitleCapsEditor(n) {
		const m = 1
		const d = 2
		const c = 3
		const g = 4
		var j = m
		var l = ''
		var e = [
			'about',
			'above',
			'across',
			'after',
			'against',
			'along',
			'among',
			'around',
			'at',
			'before',
			'behind',
			'below',
			'beneath',
			'beside',
			'between',
			'beyond',
			'but',
			'by',
			'despite',
			'down',
			'during',
			'except',
			'for',
			'from',
			'in',
			'inside',
			'into',
			'like',
			'near',
			'of',
			'off',
			'on',
			'onto',
			'out',
			'outside',
			'over',
			'past',
			'per',
			'since',
			'through',
			'throughout',
			'till',
			'to',
			'toward',
			'under',
			'underneath',
			'until',
			'up',
			'upon',
			'via',
			'with',
			'within',
			'without',
		]
		var a = ['a', 'an', 'the']
		var q = ['and', 'but', 'or', 'nor', 'for', 'yet', 'so']
		var f = ['if', 'en', 'as', 'vs.', 'v[.]?']
		var i =
			'(' +
			e
				.concat(a)
				.concat(q)
				.concat(f)
				.join('|') +
			')'
		var k = '([!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)'
		this.input = n
		this.input.oninput = function() {
			var s = h(this)
			this.value = b(this.value)
			p(this, s)
		}
		this.setMode = function(s) {
			s = parseInt(s, 10)
			j = s >= 1 && s <= 4 ? s : g
			this.input.oninput()
		}
		this.getMode = function() {
			return j
		}
		function b(w) {
			var v = [],
				u = /[:.;?!] |(?: |^)[""]/g,
				t = 0
			if (j == m) {
				if (!l) {
					l = w
				}
				return l
			}
			while (true) {
				var s = u.exec(w)
				v.push(
					w
						.substring(t, s ? s.index : w.length)
						.replace(/\b([A-Za-z][a-z.'"]*)\b/g, function(x) {
							return /[A-Za-z]\.[A-Za-z]/.test(x) ? x : o(x)
						})
						.replace(/\b([A-Za-z]*[^\u0000-\u007F]+[A-Za-z]*)\b/g, function(
							x,
						) {
							return o(x)
						})
						.replace(RegExp('\\b' + i + '\\b', 'ig'), function(x) {
							if (j == d) {
								return x.length >= 4 ? o(x) : r(x)
							} else {
								if (j == c) {
									return x.length >= 5 ? o(x) : r(x)
								} else {
									return r(x)
								}
							}
						})
						.replace(RegExp('^' + k + i + '\\b', 'ig'), function(x, y, z) {
							return y + o(z)
						})
						.replace(RegExp('\\b' + i + k + '$', 'ig'), o),
				)
				t = u.lastIndex
				if (s) {
					v.push(s[0])
				} else {
					break
				}
			}
			return v
				.join('')
				.replace(/ V(s?)\. /gi, ' v$1. ')
				.replace(/(['"])S\b/gi, '$1s')
				.replace(/\b(AT&T|Q&A)\b/gi, function(x) {
					return x.toUpperCase()
				})
		}
		function r(s) {
			return s.toLowerCase()
		}
		function o(s) {
			return s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase()
		}
		function h(u) {
			var t = 0
			if (document.selection && document.selection.createRange) {
				u.focus()
				var s = document.selection.createRange()
				s.moveStart('character', -u.value.length), (t = s.text.length)
			} else {
				if (u.selectionStart || u.selectionStart == '0') {
					t = u.selectionStart
				}
			}
			return t
		}
		function p(u, s) {
			if (u.setSelectionRange) {
				u.focus()
				u.setSelectionRange(s, s)
			} else {
				if (u.createTextRange) {
					var t = u.createTextRange()
					t.collapse(true)
					t.moveEnd('character', s)
					t.moveStart('character', s)
					t.select()
				}
			}
		}
	}
	return (
		<div>
			<div id="input_container">
				<input type="text" id="text_input" placeholder="Enter your Headline" />
			</div>
			<div id="options">
				<div>
					<input type="radio" id="option_1" name="mode" value="1" />
					<label htmlFor="option_1">
						Original Form (as you typed the first time)
					</label>
				</div>
				<div>
					<input type="radio" id="option_2" name="mode" value="2" />
					<label htmlFor="option_2">
						Capitalize Words With Four or More Letters (Associated Press
						style)
					</label>
				</div>
				<div>
					<input type="radio" id="option_3" name="mode" value="3" />
					<label htmlFor="option_3">
						Capitalize Words with Five or More Letters (APA Style)
					</label>
				</div>
				<div>
					<input type="radio" id="option_4" name="mode" value="4" />
					<label htmlFor="option_4">
						Do Not Capitalize Words Based on Length (Chicago Manual of Style)
					</label>
				</div>

				<div>
					<input type="radio" id="option_5" name="mode" value="5" />
					<label htmlFor="option_5">
						Capitalize Major Words and Those With Four or More Letters (MLA
						Style)
					</label>
				</div>
			</div>
		</div>
	)
}

export default CapitalizationTool
