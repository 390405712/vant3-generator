(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as m, ref as Z, createVNode as r, mergeProps as h, Fragment as V, createTextVNode as f, isVNode as i } from "vue";
import { Form as p, CellGroup as o, Button as O, Field as k, Popup as z, Cascader as ee, Calendar as le, DatetimePicker as ae, Picker as ue, Stepper as te, Uploader as de, Switch as re, RadioGroup as se, Radio as ce, CheckboxGroup as he, Checkbox as ge } from "vant";
function F(w) {
  return typeof w == "function" || Object.prototype.toString.call(w) === "[object Object]" && !i(w);
}
const Se = /* @__PURE__ */ m({
  name: "FormGenerator",
  setup(w, {
    expose: U,
    attrs: v,
    slots: c,
    emit: A
  }) {
    const u = v, x = Z(), y = {};
    return U(() => ({
      ...x.value,
      $refs: y
    })), () => {
      function D() {
        return r(p, h({
          class: "FormGenerator"
        }, u, {
          ref: x
        }), {
          default: () => [r(o, null, {
            default: () => [u.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return N(e);
            }), u.disabled === !0 || !u.onSubmit ? "" : c != null && c.default ? r(V, null, [c.default()[0].children]) : r(O, {
              loading: u.loading,
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [f("提交")]
            })]
          })]
        });
      }
      function M(e, $) {
        var j;
        let S = $ ? e.formItem.text : u.model[e.formItem.name];
        return r(k, h({
          "is-link": !0,
          readonly: !0,
          onClick: u.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: S,
          "onUpdate:modelValue": (_) => S = _
        }, e.formItem), {
          ...(j = e == null ? void 0 : e.formItem) == null ? void 0 : j.slots
        });
      }
      function n(e, $ = "datetime") {
        let S;
        switch ($) {
          case "date":
            S = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "datehour":
            S = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}`;
            break;
          case "year-month":
            S = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
            break;
          case "month-day":
            S = `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "time":
            S = e;
            break;
          case "datetime":
            S = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
            break;
        }
        return S;
      }
      function N(e) {
        var S, j, _, R, Y, E, q, T, H, B, K, J, L, Q;
        y[e.formItem.name] = Z();
        function $(a, l, t, d = !1) {
          var g;
          if (!Array.isArray(a))
            return "";
          for (let b = 0; b < a.length; b++) {
            const s = a[b];
            if (typeof s == "string") {
              if (s === l)
                return s[(t == null ? void 0 : t.text) ?? "text"] || "";
            } else if (s[(t == null ? void 0 : t.values) ?? (t == null ? void 0 : t.value) ?? "value"] === l)
              return s[(t == null ? void 0 : t.text) ?? "text"] || "";
            if ((g = s[(t == null ? void 0 : t.children) ?? "children"]) != null && g.length) {
              const I = $(s[(t == null ? void 0 : t.children) ?? "children"], l, t);
              if (I)
                return d ? `${s[(t == null ? void 0 : t.text) ?? "text"]}/${I}` : I;
            }
          }
          return null;
        }
        switch (e.type) {
          case "field":
            return r(k, h({
              ref: y[e.formItem.name],
              inputAlign: "right",
              modelValue: u.model[e.formItem.name],
              "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
            }, e.formItem, e.control), {
              ...(S = e == null ? void 0 : e.control) == null ? void 0 : S.slots
            });
          case "checkbox":
            return r(k, h({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let a;
                return r(he, h({
                  ref: y[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
                }, e == null ? void 0 : e.control), F(a = e.control.checkboxGroup.map((l) => r(ge, h(l, {
                  name: l.value
                }), {
                  default: () => [l.label],
                  ...l == null ? void 0 : l.slots
                }))) ? a : {
                  default: () => [a]
                });
              }
            });
          case "radio":
            return r(k, h({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let a;
                return r(se, h({
                  ref: y[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
                }, e == null ? void 0 : e.control), F(a = e.control.radioGroup.map((l) => r(ce, h({
                  name: l.value
                }, l), {
                  default: () => [l.label],
                  ...l == null ? void 0 : l.slots
                }))) ? a : {
                  default: () => [a]
                });
              }
            });
          case "switch":
            return r(k, h({
              class: "field-switch",
              readonly: !0
            }, e.formItem), {
              "right-icon": () => {
                var a;
                return r(re, h({
                  ref: y[e.formItem.name],
                  disabled: u.disabled,
                  size: "24px",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => {
                    u.model[e.formItem.name] = l;
                  }
                }, e == null ? void 0 : e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                });
              }
            });
          case "uploader":
            return r(k, h({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                var a;
                return r(de, h({
                  ref: y[e.formItem.name],
                  disabled: u.disabled,
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
                }, e == null ? void 0 : e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                });
              }
            });
          case "stepper":
            return r(k, h({
              readonly: !0
            }, e.formItem), {
              "right-icon": () => r(te, h({
                ref: y[e.formItem.name],
                disabled: u.disabled,
                "button-size": "21px",
                modelValue: u.model[e.formItem.name],
                "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return !e.formItem.hasOwnProperty("text") && u.model[e.formItem.name] && ((j = e == null ? void 0 : e.control) != null && j.columns) && (Array.isArray((Y = (R = (_ = e == null ? void 0 : e.control) == null ? void 0 : _.columns) == null ? void 0 : R[0]) == null ? void 0 : Y.values) ? e.formItem.text = ((E = e == null ? void 0 : e.control) == null ? void 0 : E.columns).reduce((a, l, t) => {
              var d, g, b, s, I, P;
              return typeof ((d = l == null ? void 0 : l.values) == null ? void 0 : d[0]) == "string" ? a.push((g = l.values) == null ? void 0 : g.find((C) => {
                var G;
                return C === ((G = u.model[e.formItem.name]) == null ? void 0 : G[t]);
              })) : a.push((P = (b = l.values) == null ? void 0 : b.find((C) => {
                var G, W, X;
                return C[((W = (G = e == null ? void 0 : e.control) == null ? void 0 : G.columnsFieldNames) == null ? void 0 : W.values) ?? "value"] === ((X = u.model[e.formItem.name]) == null ? void 0 : X[t]);
              })) == null ? void 0 : P[((I = (s = e == null ? void 0 : e.control) == null ? void 0 : s.columnsFieldNames) == null ? void 0 : I.text) ?? "text"]), a;
            }, []).join("/") : Array.isArray(u.model[e.formItem.name]) ? e.formItem.text = u.model[e.formItem.name].reduce((a, l) => {
              var t, d;
              return a.push($((t = e == null ? void 0 : e.control) == null ? void 0 : t.columns, l, (d = e == null ? void 0 : e.control) == null ? void 0 : d.columnsFieldNames)), a;
            }, []).join("/") : e.formItem.text = $((q = e == null ? void 0 : e.control) == null ? void 0 : q.columns, u.model[e.formItem.name], (T = e == null ? void 0 : e.control) == null ? void 0 : T.columnsFieldNames)), r(V, null, [M(e, !0), r(z, h({
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var a;
                return [r(ue, h({
                  ref: y[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l,
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (l) => {
                    var t, d, g, b;
                    e.showPopup = !1, Array.isArray(l) ? (u.model[e.formItem.name] = l.reduce((s, I) => {
                      var P, C;
                      return s.push(typeof I == "object" ? I == null ? void 0 : I[((C = (P = e == null ? void 0 : e.control) == null ? void 0 : P.columnsFieldNames) == null ? void 0 : C.values) ?? "value"] : I), s;
                    }, []), e.formItem.text = l.map((s) => {
                      var I, P;
                      return typeof s == "object" ? s == null ? void 0 : s[((P = (I = e == null ? void 0 : e.control) == null ? void 0 : I.columnsFieldNames) == null ? void 0 : P.text) ?? "text"] : s;
                    }).join("/")) : (u.model[e.formItem.name] = l[((d = (t = e == null ? void 0 : e.control) == null ? void 0 : t.columnsFieldNames) == null ? void 0 : d.values) ?? "value"], e.formItem.text = l[((b = (g = e == null ? void 0 : e.control) == null ? void 0 : g.columnsFieldNames) == null ? void 0 : b.text) ?? "text"]);
                  }
                }, e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                })];
              }
            })]);
          case "datetimePicker":
            return r(V, null, [M(e), r(z, h({
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var a;
                return [r(ae, h({
                  ref: y[e.formItem.name],
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (l) => {
                    var t;
                    e.showPopup = !1, u.model[e.formItem.name] = n(l, (t = e == null ? void 0 : e.control) == null ? void 0 : t.type);
                  }
                }, e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                })];
              }
            })]);
          case "calendar":
            return r(V, null, [M(e, ((H = e == null ? void 0 : e.control) == null ? void 0 : H.type) === "multiple"), r(le, h({
              ref: y[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              "show-confirm": ((B = e == null ? void 0 : e.control) == null ? void 0 : B.type) === "multiple",
              onConfirm: (a) => {
                var t;
                e.showPopup = !1;
                const l = (d) => {
                  var g, b, s;
                  return `${(g = d == null ? void 0 : d.getFullYear) == null ? void 0 : g.call(d)}-${String(((b = d == null ? void 0 : d.getMonth) == null ? void 0 : b.call(d)) + 1).padStart(2, "0")}-${String((s = d == null ? void 0 : d.getDate) == null ? void 0 : s.call(d)).padStart(2, "0")}`;
                };
                switch ((t = e == null ? void 0 : e.control) == null ? void 0 : t.type) {
                  case "multiple":
                    u.model[e.formItem.name] = a.reduce((d, g) => (d.push(l(g)), d), []), e.formItem.text = `选择了 ${a.length} 个日期`;
                    break;
                  case "range":
                    u.model[e.formItem.name] = [l(a[0]), l(a[1])], e.formItem.text = `${l(a[0])}~${l(a[1])}`;
                    break;
                  default:
                    u.model[e.formItem.name] = l(a);
                    break;
                }
              }
            }, e.control), {
              ...(K = e == null ? void 0 : e.control) == null ? void 0 : K.slots
            })]);
          case "cascader":
            return u.model[e.formItem.name] && (e.formItem.text = $((J = e == null ? void 0 : e.control) == null ? void 0 : J.options, u.model[e.formItem.name], (L = e == null ? void 0 : e.control) == null ? void 0 : L.fieldNames, !0)), r(V, null, [M(e, !0), r(z, h({
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var a;
                return [r(ee, h({
                  ref: y[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (l) => {
                    e.showPopup = !1, u.model[e.formItem.name] = l.value, e.formItem.text = l.selectedOptions.map((t) => {
                      var d, g;
                      return t[((g = (d = e == null ? void 0 : e.control) == null ? void 0 : d.fieldNames) == null ? void 0 : g.text) ?? "text"];
                    }).join("/");
                  }
                }, e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                })];
              }
            })]);
          case "slot":
            return r(k, h({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(Q = e == null ? void 0 : e.control) == null ? void 0 : Q.slots,
              input: () => {
                var a, l, t, d, g, b, s, I;
                return (l = (a = e == null ? void 0 : e.control) == null ? void 0 : a.slots) != null && l.input && typeof ((d = (t = e == null ? void 0 : e.control) == null ? void 0 : t.slots) == null ? void 0 : d.input) == "function" ? r(V, null, [(s = (b = (g = e == null ? void 0 : e.control) == null ? void 0 : g.slots) == null ? void 0 : b.input) == null ? void 0 : s.call(b, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : c[e.formItem.name] ? r(V, null, [(I = c[e.formItem.name]) == null ? void 0 : I.call(c, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : u.model[e.formItem.name];
              }
            });
        }
      }
      return D();
    };
  }
}), Ie = (w, U, v, c) => {
  if (!Array.isArray(w))
    return [];
  const A = [];
  let u = [];
  return c && (u = Object.keys(c)), w.forEach((x) => {
    let y = {
      label: typeof x == "string" ? x : x[U],
      value: typeof x == "string" ? x : x[v]
    };
    c && u.forEach((D) => {
      y[D] = x[D];
    }), A.push(y);
  }), A;
}, be = (w, U = []) => {
  const v = {
    field: "输入",
    stepper: "输入",
    picker: "选择",
    radio: "选择",
    checkbox: "选择",
    switch: "选择",
    datetimePicker: "选择",
    calendar: "选择",
    cascader: "选择",
    uploader: "上传",
    slot: ""
  };
  return w.forEach((c) => {
    const A = { required: !0, message: `请${v[c.type] || "完善"}${c.formItem.label || ""}`, trigger: "onChange" };
    if (!U.includes(c.formItem.name) && (c.formItem.required = !0, !["stepper", "switch"].includes(c.type))) {
      c.formItem.rules ? c.formItem.rules.unshift(A) : c.formItem.rules = [A];
      for (let u = 0; u < c.formItem.rules.length; u++) {
        let x = c.formItem.rules[u];
        x.message || (x.message = "格式有误");
      }
    }
  }), w;
}, we = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: Ie,
  setRequired: be
}, Symbol.toStringTag, { value: "Module" }));
export {
  Se as FormGenerator,
  we as GeneratorUtils
};
//# sourceMappingURL=index.js.map
