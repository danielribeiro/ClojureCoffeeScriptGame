goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____1975 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____1975))
{return or__3576__auto____1975;
} else
{var or__3576__auto____1976 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____1976))
{return or__3576__auto____1976;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1977 = coll;

if(cljs.core.truth_(and__3574__auto____1977))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____1977;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____1978 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1978))
{return or__3576__auto____1978;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1979 = coll;

if(cljs.core.truth_(and__3574__auto____1979))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____1979;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____1980 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1980))
{return or__3576__auto____1980;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____1981 = coll;

if(cljs.core.truth_(and__3574__auto____1981))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____1981;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____1982 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1982))
{return or__3576__auto____1982;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__1987 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____1983 = coll;

if(cljs.core.truth_(and__3574__auto____1983))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1983;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____1984 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1984))
{return or__3576__auto____1984;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__1988 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1985 = coll;

if(cljs.core.truth_(and__3574__auto____1985))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____1985;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____1986 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1986))
{return or__3576__auto____1986;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__1987.call(this,coll,n);
case  3 :
return _nth__1988.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1990 = coll;

if(cljs.core.truth_(and__3574__auto____1990))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____1990;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____1991 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1991))
{return or__3576__auto____1991;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____1992 = coll;

if(cljs.core.truth_(and__3574__auto____1992))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____1992;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____1993 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____1993))
{return or__3576__auto____1993;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__1998 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____1994 = o;

if(cljs.core.truth_(and__3574__auto____1994))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1994;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____1995 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1995))
{return or__3576__auto____1995;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__1999 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____1996 = o;

if(cljs.core.truth_(and__3574__auto____1996))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____1996;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____1997 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____1997))
{return or__3576__auto____1997;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__1998.call(this,o,k);
case  3 :
return _lookup__1999.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2001 = coll;

if(cljs.core.truth_(and__3574__auto____2001))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2001;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2002 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2002))
{return or__3576__auto____2002;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2003 = coll;

if(cljs.core.truth_(and__3574__auto____2003))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2003;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2004 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2004))
{return or__3576__auto____2004;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2005 = coll;

if(cljs.core.truth_(and__3574__auto____2005))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2005;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2006 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2006))
{return or__3576__auto____2006;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2007 = coll;

if(cljs.core.truth_(and__3574__auto____2007))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2007;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2008 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2008))
{return or__3576__auto____2008;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2009 = coll;

if(cljs.core.truth_(and__3574__auto____2009))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2009;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2010 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2010))
{return or__3576__auto____2010;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2011 = coll;

if(cljs.core.truth_(and__3574__auto____2011))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2011;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2012 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2012))
{return or__3576__auto____2012;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2013 = coll;

if(cljs.core.truth_(and__3574__auto____2013))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2013;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2014 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2014))
{return or__3576__auto____2014;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2015 = o;

if(cljs.core.truth_(and__3574__auto____2015))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2015;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2016 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2016))
{return or__3576__auto____2016;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2017 = o;

if(cljs.core.truth_(and__3574__auto____2017))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2017;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2018 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2018))
{return or__3576__auto____2018;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2019 = o;

if(cljs.core.truth_(and__3574__auto____2019))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2019;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2020 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2020))
{return or__3576__auto____2020;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2021 = o;

if(cljs.core.truth_(and__3574__auto____2021))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2021;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2022 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2022))
{return or__3576__auto____2022;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2027 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2023 = coll;

if(cljs.core.truth_(and__3574__auto____2023))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2023;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2024 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2024))
{return or__3576__auto____2024;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__2028 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2025 = coll;

if(cljs.core.truth_(and__3574__auto____2025))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2025;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2026 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2026))
{return or__3576__auto____2026;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2027.call(this,coll,f);
case  3 :
return _reduce__2028.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2030 = o;

if(cljs.core.truth_(and__3574__auto____2030))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2030;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2031 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2031))
{return or__3576__auto____2031;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2032 = o;

if(cljs.core.truth_(and__3574__auto____2032))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2032;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2033 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2033))
{return or__3576__auto____2033;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2034 = o;

if(cljs.core.truth_(and__3574__auto____2034))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2034;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2035 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2035))
{return or__3576__auto____2035;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2036 = o;

if(cljs.core.truth_(and__3574__auto____2036))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2036;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2037 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2037))
{return or__3576__auto____2037;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2038 = d;

if(cljs.core.truth_(and__3574__auto____2038))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2038;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2039 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2039))
{return or__3576__auto____2039;
} else
{return (_realized_QMARK_["_"]);
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2040 = null;
var G__2040__2041 = (function (_,n){
return null;
});
var G__2040__2042 = (function (_,n,not_found){
return not_found;
});
G__2040 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2040__2041.call(this,_,n);
case  3 :
return G__2040__2042.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2040;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2044 = null;
var G__2044__2045 = (function (_,f){
return f.call(null);
});
var G__2044__2046 = (function (_,f,start){
return start;
});
G__2044 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2044__2045.call(this,_,f);
case  3 :
return G__2044__2046.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2044;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2048 = null;
var G__2048__2049 = (function (o,k){
return null;
});
var G__2048__2050 = (function (o,k,not_found){
return not_found;
});
G__2048 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2048__2049.call(this,o,k);
case  3 :
return G__2048__2050.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2048;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2058 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2052 = cljs.core._nth.call(null,cicoll,0);
var n__2053 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2053,cljs.core._count.call(null,cicoll))))
{{
var G__2062 = f.call(null,val__2052,cljs.core._nth.call(null,cicoll,n__2053));
var G__2063 = cljs.core.inc.call(null,n__2053);
val__2052 = G__2062;
n__2053 = G__2063;
continue;
}
} else
{return val__2052;
}
break;
}
}
});
var ci_reduce__2059 = (function (cicoll,f,val){
var val__2054 = val;
var n__2055 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2055,cljs.core._count.call(null,cicoll))))
{{
var G__2064 = f.call(null,val__2054,cljs.core._nth.call(null,cicoll,n__2055));
var G__2065 = cljs.core.inc.call(null,n__2055);
val__2054 = G__2064;
n__2055 = G__2065;
continue;
}
} else
{return val__2054;
}
break;
}
});
var ci_reduce__2060 = (function (cicoll,f,val,idx){
var val__2056 = val;
var n__2057 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2057,cljs.core._count.call(null,cicoll))))
{{
var G__2066 = f.call(null,val__2056,cljs.core._nth.call(null,cicoll,n__2057));
var G__2067 = cljs.core.inc.call(null,n__2057);
val__2056 = G__2066;
n__2057 = G__2067;
continue;
}
} else
{return val__2056;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2058.call(this,cicoll,f);
case  3 :
return ci_reduce__2059.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2060.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2074 = null;
var G__2074__2075 = (function (_,f){
var this__2068 = this;
return cljs.core.ci_reduce.call(null,this__2068.a,f,(this__2068.a[this__2068.i]),cljs.core.inc.call(null,this__2068.i));
});
var G__2074__2076 = (function (_,f,start){
var this__2069 = this;
return cljs.core.ci_reduce.call(null,this__2069.a,f,start,this__2069.i);
});
G__2074 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2074__2075.call(this,_,f);
case  3 :
return G__2074__2076.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2074;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2070 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2071 = this;
return (this__2071.a[this__2071.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2072 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2072.i),cljs.core._count.call(null,this__2072.a))))
{return (new cljs.core.IndexedSeq(this__2072.a,cljs.core.inc.call(null,this__2072.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2073 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,prim))))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2078 = null;
var G__2078__2079 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2078__2080 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2078 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2078__2079.call(this,array,f);
case  3 :
return G__2078__2080.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2078;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2082 = null;
var G__2082__2083 = (function (array,k){
return (array[k]);
});
var G__2082__2084 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2082 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2082__2083.call(this,array,k);
case  3 :
return G__2082__2084.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2082;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2086 = null;
var G__2086__2087 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2086__2088 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2086 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2086__2087.call(this,array,n);
case  3 :
return G__2086__2088.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2086;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2090 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2090))
{var s__2091 = temp__3726__auto____2090;

return cljs.core._first.call(null,s__2091);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2092 = cljs.core.next.call(null,s);
s = G__2092;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2093 = cljs.core.seq.call(null,x);
var n__2094 = 0;

while(true){
if(cljs.core.truth_(s__2093))
{{
var G__2095 = cljs.core.next.call(null,s__2093);
var G__2096 = cljs.core.inc.call(null,n__2094);
s__2093 = G__2095;
n__2094 = G__2096;
continue;
}
} else
{return n__2094;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2097 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2098 = (function() { 
var G__2100__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2101 = conj.call(null,coll,x);
var G__2102 = cljs.core.first.call(null,xs);
var G__2103 = cljs.core.next.call(null,xs);
coll = G__2101;
x = G__2102;
xs = G__2103;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2100 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2100__delegate.call(this, coll, x, xs);
};
G__2100.cljs$lang$maxFixedArity = 2;
G__2100.cljs$lang$applyTo = (function (arglist__2104){
var coll = cljs.core.first(arglist__2104);
var x = cljs.core.first(cljs.core.next(arglist__2104));
var xs = cljs.core.rest(cljs.core.next(arglist__2104));
return G__2100__delegate.call(this, coll, x, xs);
});
return G__2100;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2097.call(this,coll,x);
default:
return conj__2098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2098.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2105 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2106 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2105.call(this,coll,n);
case  3 :
return nth__2106.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2108 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2109 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2108.call(this,o,k);
case  3 :
return get__2109.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2112 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2113 = (function() { 
var G__2115__delegate = function (coll,k,v,kvs){
while(true){
var ret__2111 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2116 = ret__2111;
var G__2117 = cljs.core.first.call(null,kvs);
var G__2118 = cljs.core.second.call(null,kvs);
var G__2119 = cljs.core.nnext.call(null,kvs);
coll = G__2116;
k = G__2117;
v = G__2118;
kvs = G__2119;
continue;
}
} else
{return ret__2111;
}
break;
}
};
var G__2115 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2115__delegate.call(this, coll, k, v, kvs);
};
G__2115.cljs$lang$maxFixedArity = 3;
G__2115.cljs$lang$applyTo = (function (arglist__2120){
var coll = cljs.core.first(arglist__2120);
var k = cljs.core.first(cljs.core.next(arglist__2120));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2120)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2120)));
return G__2115__delegate.call(this, coll, k, v, kvs);
});
return G__2115;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2112.call(this,coll,k,v);
default:
return assoc__2113.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2113.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2122 = (function (coll){
return coll;
});
var dissoc__2123 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2124 = (function() { 
var G__2126__delegate = function (coll,k,ks){
while(true){
var ret__2121 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2127 = ret__2121;
var G__2128 = cljs.core.first.call(null,ks);
var G__2129 = cljs.core.next.call(null,ks);
coll = G__2127;
k = G__2128;
ks = G__2129;
continue;
}
} else
{return ret__2121;
}
break;
}
};
var G__2126 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2126__delegate.call(this, coll, k, ks);
};
G__2126.cljs$lang$maxFixedArity = 2;
G__2126.cljs$lang$applyTo = (function (arglist__2130){
var coll = cljs.core.first(arglist__2130);
var k = cljs.core.first(cljs.core.next(arglist__2130));
var ks = cljs.core.rest(cljs.core.next(arglist__2130));
return G__2126__delegate.call(this, coll, k, ks);
});
return G__2126;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2122.call(this,coll);
case  2 :
return dissoc__2123.call(this,coll,k);
default:
return dissoc__2124.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2124.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__105__auto____2131 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2132 = x__105__auto____2131;

if(cljs.core.truth_(and__3574__auto____2132))
{return x__105__auto____2131.cljs$core$IMeta$;
} else
{return and__3574__auto____2132;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____2131);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2134 = (function (coll){
return coll;
});
var disj__2135 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2136 = (function() { 
var G__2138__delegate = function (coll,k,ks){
while(true){
var ret__2133 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2139 = ret__2133;
var G__2140 = cljs.core.first.call(null,ks);
var G__2141 = cljs.core.next.call(null,ks);
coll = G__2139;
k = G__2140;
ks = G__2141;
continue;
}
} else
{return ret__2133;
}
break;
}
};
var G__2138 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2138__delegate.call(this, coll, k, ks);
};
G__2138.cljs$lang$maxFixedArity = 2;
G__2138.cljs$lang$applyTo = (function (arglist__2142){
var coll = cljs.core.first(arglist__2142);
var k = cljs.core.first(cljs.core.next(arglist__2142));
var ks = cljs.core.rest(cljs.core.next(arglist__2142));
return G__2138__delegate.call(this, coll, k, ks);
});
return G__2138;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2134.call(this,coll);
case  2 :
return disj__2135.call(this,coll,k);
default:
return disj__2136.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2136.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2143 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2144 = x__105__auto____2143;

if(cljs.core.truth_(and__3574__auto____2144))
{return x__105__auto____2143.cljs$core$ICollection$;
} else
{return and__3574__auto____2144;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__105__auto____2143);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2145 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2146 = x__105__auto____2145;

if(cljs.core.truth_(and__3574__auto____2146))
{return x__105__auto____2145.cljs$core$ISet$;
} else
{return and__3574__auto____2146;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__105__auto____2145);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__105__auto____2147 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2148 = x__105__auto____2147;

if(cljs.core.truth_(and__3574__auto____2148))
{return x__105__auto____2147.cljs$core$IAssociative$;
} else
{return and__3574__auto____2148;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__105__auto____2147);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__105__auto____2149 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2150 = x__105__auto____2149;

if(cljs.core.truth_(and__3574__auto____2150))
{return x__105__auto____2149.cljs$core$ISequential$;
} else
{return and__3574__auto____2150;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__105__auto____2149);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__105__auto____2151 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2152 = x__105__auto____2151;

if(cljs.core.truth_(and__3574__auto____2152))
{return x__105__auto____2151.cljs$core$ICounted$;
} else
{return and__3574__auto____2152;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__105__auto____2151);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__105__auto____2153 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2154 = x__105__auto____2153;

if(cljs.core.truth_(and__3574__auto____2154))
{return x__105__auto____2153.cljs$core$IMap$;
} else
{return and__3574__auto____2154;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__105__auto____2153);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__105__auto____2155 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2156 = x__105__auto____2155;

if(cljs.core.truth_(and__3574__auto____2156))
{return x__105__auto____2155.cljs$core$IVector$;
} else
{return and__3574__auto____2156;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__105__auto____2155);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2157 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2157.push(key);
}));
return keys__2157;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__105__auto____2158 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2159 = x__105__auto____2158;

if(cljs.core.truth_(and__3574__auto____2159))
{return x__105__auto____2158.cljs$core$ISeq$;
} else
{return and__3574__auto____2159;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__105__auto____2158);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2160 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2160))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2161 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2161))
{return or__3576__auto____2161;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2160;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2162 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2162))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2162;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2163 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2163))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2163;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2164 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2164))
{return (n == n.toFixed());
} else
{return and__3574__auto____2164;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2165 = coll;

if(cljs.core.truth_(and__3574__auto____2165))
{var and__3574__auto____2166 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2166))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2166;
}
} else
{return and__3574__auto____2165;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2171 = (function (x){
return true;
});
var distinct_QMARK___2172 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2173 = (function() { 
var G__2175__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2167 = cljs.core.set([y,x]);
var xs__2168 = more;

while(true){
var x__2169 = cljs.core.first.call(null,xs__2168);
var etc__2170 = cljs.core.next.call(null,xs__2168);

if(cljs.core.truth_(xs__2168))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2167,x__2169)))
{return false;
} else
{{
var G__2176 = cljs.core.conj.call(null,s__2167,x__2169);
var G__2177 = etc__2170;
s__2167 = G__2176;
xs__2168 = G__2177;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2175 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2175__delegate.call(this, x, y, more);
};
G__2175.cljs$lang$maxFixedArity = 2;
G__2175.cljs$lang$applyTo = (function (arglist__2178){
var x = cljs.core.first(arglist__2178);
var y = cljs.core.first(cljs.core.next(arglist__2178));
var more = cljs.core.rest(cljs.core.next(arglist__2178));
return G__2175__delegate.call(this, x, y, more);
});
return G__2175;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2171.call(this,x);
case  2 :
return distinct_QMARK___2172.call(this,x,y);
default:
return distinct_QMARK___2173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2173.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2179 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2179)))
{return r__2179;
} else
{if(cljs.core.truth_(r__2179))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2181 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2182 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2180 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2180,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2180);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2181.call(this,comp);
case  2 :
return sort__2182.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2184 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2185 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2184.call(this,keyfn,comp);
case  3 :
return sort_by__2185.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2187 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2188 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2187.call(this,f,val);
case  3 :
return reduce__2188.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2194 = (function (f,coll){
var temp__3723__auto____2190 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2190))
{var s__2191 = temp__3723__auto____2190;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2191),cljs.core.next.call(null,s__2191));
} else
{return f.call(null);
}
});
var seq_reduce__2195 = (function (f,val,coll){
var val__2192 = val;
var coll__2193 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2193))
{{
var G__2197 = f.call(null,val__2192,cljs.core.first.call(null,coll__2193));
var G__2198 = cljs.core.next.call(null,coll__2193);
val__2192 = G__2197;
coll__2193 = G__2198;
continue;
}
} else
{return val__2192;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2194.call(this,f,val);
case  3 :
return seq_reduce__2195.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2199 = null;
var G__2199__2200 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2199__2201 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2199 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2199__2200.call(this,coll,f);
case  3 :
return G__2199__2201.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2199;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2203 = (function (){
return 0;
});
var _PLUS___2204 = (function (x){
return x;
});
var _PLUS___2205 = (function (x,y){
return (x + y);
});
var _PLUS___2206 = (function() { 
var G__2208__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2208__delegate.call(this, x, y, more);
};
G__2208.cljs$lang$maxFixedArity = 2;
G__2208.cljs$lang$applyTo = (function (arglist__2209){
var x = cljs.core.first(arglist__2209);
var y = cljs.core.first(cljs.core.next(arglist__2209));
var more = cljs.core.rest(cljs.core.next(arglist__2209));
return G__2208__delegate.call(this, x, y, more);
});
return G__2208;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2203.call(this);
case  1 :
return _PLUS___2204.call(this,x);
case  2 :
return _PLUS___2205.call(this,x,y);
default:
return _PLUS___2206.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2206.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2210 = (function (x){
return (- x);
});
var ___2211 = (function (x,y){
return (x - y);
});
var ___2212 = (function() { 
var G__2214__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2214 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2214__delegate.call(this, x, y, more);
};
G__2214.cljs$lang$maxFixedArity = 2;
G__2214.cljs$lang$applyTo = (function (arglist__2215){
var x = cljs.core.first(arglist__2215);
var y = cljs.core.first(cljs.core.next(arglist__2215));
var more = cljs.core.rest(cljs.core.next(arglist__2215));
return G__2214__delegate.call(this, x, y, more);
});
return G__2214;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2210.call(this,x);
case  2 :
return ___2211.call(this,x,y);
default:
return ___2212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2212.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2216 = (function (){
return 1;
});
var _STAR___2217 = (function (x){
return x;
});
var _STAR___2218 = (function (x,y){
return (x * y);
});
var _STAR___2219 = (function() { 
var G__2221__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2221 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2221__delegate.call(this, x, y, more);
};
G__2221.cljs$lang$maxFixedArity = 2;
G__2221.cljs$lang$applyTo = (function (arglist__2222){
var x = cljs.core.first(arglist__2222);
var y = cljs.core.first(cljs.core.next(arglist__2222));
var more = cljs.core.rest(cljs.core.next(arglist__2222));
return G__2221__delegate.call(this, x, y, more);
});
return G__2221;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2216.call(this);
case  1 :
return _STAR___2217.call(this,x);
case  2 :
return _STAR___2218.call(this,x,y);
default:
return _STAR___2219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2219.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2223 = (function (x){
return (1 / x);
});
var _SLASH___2224 = (function (x,y){
return (x / y);
});
var _SLASH___2225 = (function() { 
var G__2227__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2227__delegate.call(this, x, y, more);
};
G__2227.cljs$lang$maxFixedArity = 2;
G__2227.cljs$lang$applyTo = (function (arglist__2228){
var x = cljs.core.first(arglist__2228);
var y = cljs.core.first(cljs.core.next(arglist__2228));
var more = cljs.core.rest(cljs.core.next(arglist__2228));
return G__2227__delegate.call(this, x, y, more);
});
return G__2227;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2223.call(this,x);
case  2 :
return _SLASH___2224.call(this,x,y);
default:
return _SLASH___2225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2225.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2229 = (function (x){
return true;
});
var _LT___2230 = (function (x,y){
return (x < y);
});
var _LT___2231 = (function() { 
var G__2233__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2234 = y;
var G__2235 = cljs.core.first.call(null,more);
var G__2236 = cljs.core.next.call(null,more);
x = G__2234;
y = G__2235;
more = G__2236;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2233__delegate.call(this, x, y, more);
};
G__2233.cljs$lang$maxFixedArity = 2;
G__2233.cljs$lang$applyTo = (function (arglist__2237){
var x = cljs.core.first(arglist__2237);
var y = cljs.core.first(cljs.core.next(arglist__2237));
var more = cljs.core.rest(cljs.core.next(arglist__2237));
return G__2233__delegate.call(this, x, y, more);
});
return G__2233;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2229.call(this,x);
case  2 :
return _LT___2230.call(this,x,y);
default:
return _LT___2231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2231.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2238 = (function (x){
return true;
});
var _LT__EQ___2239 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2240 = (function() { 
var G__2242__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2243 = y;
var G__2244 = cljs.core.first.call(null,more);
var G__2245 = cljs.core.next.call(null,more);
x = G__2243;
y = G__2244;
more = G__2245;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2242 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2242__delegate.call(this, x, y, more);
};
G__2242.cljs$lang$maxFixedArity = 2;
G__2242.cljs$lang$applyTo = (function (arglist__2246){
var x = cljs.core.first(arglist__2246);
var y = cljs.core.first(cljs.core.next(arglist__2246));
var more = cljs.core.rest(cljs.core.next(arglist__2246));
return G__2242__delegate.call(this, x, y, more);
});
return G__2242;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2238.call(this,x);
case  2 :
return _LT__EQ___2239.call(this,x,y);
default:
return _LT__EQ___2240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2240.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2247 = (function (x){
return true;
});
var _GT___2248 = (function (x,y){
return (x > y);
});
var _GT___2249 = (function() { 
var G__2251__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2252 = y;
var G__2253 = cljs.core.first.call(null,more);
var G__2254 = cljs.core.next.call(null,more);
x = G__2252;
y = G__2253;
more = G__2254;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2251 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2251__delegate.call(this, x, y, more);
};
G__2251.cljs$lang$maxFixedArity = 2;
G__2251.cljs$lang$applyTo = (function (arglist__2255){
var x = cljs.core.first(arglist__2255);
var y = cljs.core.first(cljs.core.next(arglist__2255));
var more = cljs.core.rest(cljs.core.next(arglist__2255));
return G__2251__delegate.call(this, x, y, more);
});
return G__2251;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2247.call(this,x);
case  2 :
return _GT___2248.call(this,x,y);
default:
return _GT___2249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2249.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2256 = (function (x){
return true;
});
var _GT__EQ___2257 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2258 = (function() { 
var G__2260__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2261 = y;
var G__2262 = cljs.core.first.call(null,more);
var G__2263 = cljs.core.next.call(null,more);
x = G__2261;
y = G__2262;
more = G__2263;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2260 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2260__delegate.call(this, x, y, more);
};
G__2260.cljs$lang$maxFixedArity = 2;
G__2260.cljs$lang$applyTo = (function (arglist__2264){
var x = cljs.core.first(arglist__2264);
var y = cljs.core.first(cljs.core.next(arglist__2264));
var more = cljs.core.rest(cljs.core.next(arglist__2264));
return G__2260__delegate.call(this, x, y, more);
});
return G__2260;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2256.call(this,x);
case  2 :
return _GT__EQ___2257.call(this,x,y);
default:
return _GT__EQ___2258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2258.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2265 = (function (x){
return x;
});
var max__2266 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2267 = (function() { 
var G__2269__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2269 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2269__delegate.call(this, x, y, more);
};
G__2269.cljs$lang$maxFixedArity = 2;
G__2269.cljs$lang$applyTo = (function (arglist__2270){
var x = cljs.core.first(arglist__2270);
var y = cljs.core.first(cljs.core.next(arglist__2270));
var more = cljs.core.rest(cljs.core.next(arglist__2270));
return G__2269__delegate.call(this, x, y, more);
});
return G__2269;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2265.call(this,x);
case  2 :
return max__2266.call(this,x,y);
default:
return max__2267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2267.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2271 = (function (x){
return x;
});
var min__2272 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2273 = (function() { 
var G__2275__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2275 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2275__delegate.call(this, x, y, more);
};
G__2275.cljs$lang$maxFixedArity = 2;
G__2275.cljs$lang$applyTo = (function (arglist__2276){
var x = cljs.core.first(arglist__2276);
var y = cljs.core.first(cljs.core.next(arglist__2276));
var more = cljs.core.rest(cljs.core.next(arglist__2276));
return G__2275__delegate.call(this, x, y, more);
});
return G__2275;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2271.call(this,x);
case  2 :
return min__2272.call(this,x,y);
default:
return min__2273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2273.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2277 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2277) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2278 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2278));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2279 = (function (){
return Math.random.call(null);
});
var rand__2280 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2279.call(this);
case  1 :
return rand__2280.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2282 = (function (x){
return true;
});
var _EQ__EQ___2283 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2284 = (function() { 
var G__2286__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2287 = y;
var G__2288 = cljs.core.first.call(null,more);
var G__2289 = cljs.core.next.call(null,more);
x = G__2287;
y = G__2288;
more = G__2289;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2286 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2286__delegate.call(this, x, y, more);
};
G__2286.cljs$lang$maxFixedArity = 2;
G__2286.cljs$lang$applyTo = (function (arglist__2290){
var x = cljs.core.first(arglist__2290);
var y = cljs.core.first(cljs.core.next(arglist__2290));
var more = cljs.core.rest(cljs.core.next(arglist__2290));
return G__2286__delegate.call(this, x, y, more);
});
return G__2286;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2282.call(this,x);
case  2 :
return _EQ__EQ___2283.call(this,x,y);
default:
return _EQ__EQ___2284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2284.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2291 = n;
var xs__2292 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2293 = xs__2292;

if(cljs.core.truth_(and__3574__auto____2293))
{return cljs.core.pos_QMARK_.call(null,n__2291);
} else
{return and__3574__auto____2293;
}
})()))
{{
var G__2294 = cljs.core.dec.call(null,n__2291);
var G__2295 = cljs.core.next.call(null,xs__2292);
n__2291 = G__2294;
xs__2292 = G__2295;
continue;
}
} else
{return xs__2292;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2300 = null;
var G__2300__2301 = (function (coll,n){
var temp__3723__auto____2296 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2296))
{var xs__2297 = temp__3723__auto____2296;

return cljs.core.first.call(null,xs__2297);
} else
{throw "Index out of bounds";
}
});
var G__2300__2302 = (function (coll,n,not_found){
var temp__3723__auto____2298 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2298))
{var xs__2299 = temp__3723__auto____2298;

return cljs.core.first.call(null,xs__2299);
} else
{return not_found;
}
});
G__2300 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2300__2301.call(this,coll,n);
case  3 :
return G__2300__2302.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2300;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2304 = (function (){
return "";
});
var str__2305 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2306 = (function() { 
var G__2308__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2309 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2310 = cljs.core.next.call(null,more);
sb = G__2309;
more = G__2310;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2308 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2308__delegate.call(this, x, ys);
};
G__2308.cljs$lang$maxFixedArity = 1;
G__2308.cljs$lang$applyTo = (function (arglist__2311){
var x = cljs.core.first(arglist__2311);
var ys = cljs.core.rest(arglist__2311);
return G__2308__delegate.call(this, x, ys);
});
return G__2308;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2304.call(this);
case  1 :
return str__2305.call(this,x);
default:
return str__2306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2306.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2312 = (function (s,start){
return s.substring(start);
});
var subs__2313 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2312.call(this,s,start);
case  3 :
return subs__2313.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2315 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2316 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2315.call(this,ns);
case  2 :
return symbol__2316.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2318 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2319 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2318.call(this,ns);
case  2 :
return keyword__2319.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2321 = cljs.core.seq.call(null,x);
var ys__2322 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2321)))
{return cljs.core.nil_QMARK_.call(null,ys__2322);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2322)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2321),cljs.core.first.call(null,ys__2322))))
{{
var G__2323 = cljs.core.next.call(null,xs__2321);
var G__2324 = cljs.core.next.call(null,ys__2322);
xs__2321 = G__2323;
ys__2322 = G__2324;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2325_SHARP_,p2__2326_SHARP_){
return cljs.core.hash_combine.call(null,p1__2325_SHARP_,cljs.core.hash.call(null,p2__2326_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2327 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2328 = this;
return (new cljs.core.List(this__2328.meta,o,coll,cljs.core.inc.call(null,this__2328.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2329 = this;
return this__2329.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2330 = this;
return this__2330.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2331 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2332 = this;
return this__2332.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2333 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2334 = this;
return (new cljs.core.List(meta,this__2334.first,this__2334.rest,this__2334.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2335 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2336 = this;
return this__2336.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2337 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2338 = this;
return this__2338.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2339 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2340 = this;
return (new cljs.core.List(this__2340.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2341 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2342 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2343 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2344 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2345 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2346 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2347 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2348 = this;
return this__2348.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2349 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2350 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2351){
var items = cljs.core.seq( arglist__2351 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2352 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2353 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2354 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2355 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2355.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2356 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2357 = this;
return this__2357.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2358 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2358.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2358.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2359 = this;
return this__2359.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2360 = this;
return (new cljs.core.Cons(meta,this__2360.first,this__2360.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2361 = null;
var G__2361__2362 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2361__2363 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2361 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2361__2362.call(this,string,f);
case  3 :
return G__2361__2363.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2361;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2365 = null;
var G__2365__2366 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2365__2367 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2365 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2365__2366.call(this,string,k);
case  3 :
return G__2365__2367.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2365;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2369 = null;
var G__2369__2370 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2369__2371 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2369 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2369__2370.call(this,string,n);
case  3 :
return G__2369__2371.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2369;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__2373 = null;
var G__2373__2374 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2373__2375 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2373 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2373__2374.call(this,_,coll);
case  3 :
return G__2373__2375.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2373;
})()
;
goog.global['String']['prototype']['apply'] = (function (_,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return this.call(null,(args[0]));
} else
{return this.call(null,(args[0]),(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2377 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2377;
} else
{lazy_seq.x = x__2377.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2378 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2379 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2380 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2381 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2381.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2382 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2383 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2384 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2385 = this;
return this__2385.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2386 = this;
return (new cljs.core.LazySeq(meta,this__2386.realized,this__2386.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2387 = cljs.core.array.call(null);

var s__2388 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2388)))
{ary__2387.push(cljs.core.first.call(null,s__2388));
{
var G__2389 = cljs.core.next.call(null,s__2388);
s__2388 = G__2389;
continue;
}
} else
{return ary__2387;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2390 = s;
var i__2391 = n;
var sum__2392 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2393 = cljs.core.pos_QMARK_.call(null,i__2391);

if(cljs.core.truth_(and__3574__auto____2393))
{return cljs.core.seq.call(null,s__2390);
} else
{return and__3574__auto____2393;
}
})()))
{{
var G__2394 = cljs.core.next.call(null,s__2390);
var G__2395 = cljs.core.dec.call(null,i__2391);
var G__2396 = cljs.core.inc.call(null,sum__2392);
s__2390 = G__2394;
i__2391 = G__2395;
sum__2392 = G__2396;
continue;
}
} else
{return sum__2392;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2400 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2401 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2402 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2397 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2397))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2397),concat.call(null,cljs.core.rest.call(null,s__2397),y));
} else
{return y;
}
})));
});
var concat__2403 = (function() { 
var G__2405__delegate = function (x,y,zs){
var cat__2399 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2398 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2398))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2398),cat.call(null,cljs.core.rest.call(null,xys__2398),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2399.call(null,concat.call(null,x,y),zs);
};
var G__2405 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2405__delegate.call(this, x, y, zs);
};
G__2405.cljs$lang$maxFixedArity = 2;
G__2405.cljs$lang$applyTo = (function (arglist__2406){
var x = cljs.core.first(arglist__2406);
var y = cljs.core.first(cljs.core.next(arglist__2406));
var zs = cljs.core.rest(cljs.core.next(arglist__2406));
return G__2405__delegate.call(this, x, y, zs);
});
return G__2405;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2400.call(this);
case  1 :
return concat__2401.call(this,x);
case  2 :
return concat__2402.call(this,x,y);
default:
return concat__2403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2403.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2407 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2408 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2409 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2410 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2411 = (function() { 
var G__2413__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2413 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2413__delegate.call(this, a, b, c, d, more);
};
G__2413.cljs$lang$maxFixedArity = 4;
G__2413.cljs$lang$applyTo = (function (arglist__2414){
var a = cljs.core.first(arglist__2414);
var b = cljs.core.first(cljs.core.next(arglist__2414));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2414)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2414))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2414))));
return G__2413__delegate.call(this, a, b, c, d, more);
});
return G__2413;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2407.call(this,a);
case  2 :
return list_STAR___2408.call(this,a,b);
case  3 :
return list_STAR___2409.call(this,a,b,c);
case  4 :
return list_STAR___2410.call(this,a,b,c,d);
default:
return list_STAR___2411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2411.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2424 = (function (f,args){
var fixed_arity__2415 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2415)),fixed_arity__2415)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2425 = (function (f,x,args){
var arglist__2416 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2417 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2416,fixed_arity__2417),fixed_arity__2417)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2416));
} else
{return f.cljs$lang$applyTo(arglist__2416);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2416));
}
});
var apply__2426 = (function (f,x,y,args){
var arglist__2418 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2419 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2418,fixed_arity__2419),fixed_arity__2419)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2418));
} else
{return f.cljs$lang$applyTo(arglist__2418);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2418));
}
});
var apply__2427 = (function (f,x,y,z,args){
var arglist__2420 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2421 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2420,fixed_arity__2421),fixed_arity__2421)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2420));
} else
{return f.cljs$lang$applyTo(arglist__2420);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2420));
}
});
var apply__2428 = (function() { 
var G__2430__delegate = function (f,a,b,c,d,args){
var arglist__2422 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2423 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2422,fixed_arity__2423),fixed_arity__2423)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2422));
} else
{return f.cljs$lang$applyTo(arglist__2422);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2422));
}
};
var G__2430 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2430__delegate.call(this, f, a, b, c, d, args);
};
G__2430.cljs$lang$maxFixedArity = 5;
G__2430.cljs$lang$applyTo = (function (arglist__2431){
var f = cljs.core.first(arglist__2431);
var a = cljs.core.first(cljs.core.next(arglist__2431));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2431)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2431))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2431)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2431)))));
return G__2430__delegate.call(this, f, a, b, c, d, args);
});
return G__2430;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2424.call(this,f,a);
case  3 :
return apply__2425.call(this,f,a,b);
case  4 :
return apply__2426.call(this,f,a,b,c);
case  5 :
return apply__2427.call(this,f,a,b,c,d);
default:
return apply__2428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2428.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2432){
var obj = cljs.core.first(arglist__2432);
var f = cljs.core.first(cljs.core.next(arglist__2432));
var args = cljs.core.rest(cljs.core.next(arglist__2432));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2433 = (function (x){
return false;
});
var not_EQ___2434 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2435 = (function() { 
var G__2437__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2437 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2437__delegate.call(this, x, y, more);
};
G__2437.cljs$lang$maxFixedArity = 2;
G__2437.cljs$lang$applyTo = (function (arglist__2438){
var x = cljs.core.first(arglist__2438);
var y = cljs.core.first(cljs.core.next(arglist__2438));
var more = cljs.core.rest(cljs.core.next(arglist__2438));
return G__2437__delegate.call(this, x, y, more);
});
return G__2437;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2433.call(this,x);
case  2 :
return not_EQ___2434.call(this,x,y);
default:
return not_EQ___2435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2435.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2439 = pred;
var G__2440 = cljs.core.next.call(null,coll);
pred = G__2439;
coll = G__2440;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2441 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2441))
{return or__3576__auto____2441;
} else
{{
var G__2442 = pred;
var G__2443 = cljs.core.next.call(null,coll);
pred = G__2442;
coll = G__2443;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2444 = null;
var G__2444__2445 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2444__2446 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2444__2447 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2444__2448 = (function() { 
var G__2450__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2450 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2450__delegate.call(this, x, y, zs);
};
G__2450.cljs$lang$maxFixedArity = 2;
G__2450.cljs$lang$applyTo = (function (arglist__2451){
var x = cljs.core.first(arglist__2451);
var y = cljs.core.first(cljs.core.next(arglist__2451));
var zs = cljs.core.rest(cljs.core.next(arglist__2451));
return G__2450__delegate.call(this, x, y, zs);
});
return G__2450;
})()
;
G__2444 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2444__2445.call(this);
case  1 :
return G__2444__2446.call(this,x);
case  2 :
return G__2444__2447.call(this,x,y);
default:
return G__2444__2448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2444.cljs$lang$maxFixedArity = 2;
G__2444.cljs$lang$applyTo = G__2444__2448.cljs$lang$applyTo;
return G__2444;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2452__delegate = function (args){
return x;
};
var G__2452 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2452__delegate.call(this, args);
};
G__2452.cljs$lang$maxFixedArity = 0;
G__2452.cljs$lang$applyTo = (function (arglist__2453){
var args = cljs.core.seq( arglist__2453 );;
return G__2452__delegate.call(this, args);
});
return G__2452;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2457 = (function (){
return cljs.core.identity;
});
var comp__2458 = (function (f){
return f;
});
var comp__2459 = (function (f,g){
return (function() {
var G__2463 = null;
var G__2463__2464 = (function (){
return f.call(null,g.call(null));
});
var G__2463__2465 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2463__2466 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2463__2467 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2463__2468 = (function() { 
var G__2470__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2470 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2470__delegate.call(this, x, y, z, args);
};
G__2470.cljs$lang$maxFixedArity = 3;
G__2470.cljs$lang$applyTo = (function (arglist__2471){
var x = cljs.core.first(arglist__2471);
var y = cljs.core.first(cljs.core.next(arglist__2471));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2471)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2471)));
return G__2470__delegate.call(this, x, y, z, args);
});
return G__2470;
})()
;
G__2463 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2463__2464.call(this);
case  1 :
return G__2463__2465.call(this,x);
case  2 :
return G__2463__2466.call(this,x,y);
case  3 :
return G__2463__2467.call(this,x,y,z);
default:
return G__2463__2468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2463.cljs$lang$maxFixedArity = 3;
G__2463.cljs$lang$applyTo = G__2463__2468.cljs$lang$applyTo;
return G__2463;
})()
});
var comp__2460 = (function (f,g,h){
return (function() {
var G__2472 = null;
var G__2472__2473 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2472__2474 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2472__2475 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2472__2476 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2472__2477 = (function() { 
var G__2479__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2479 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2479__delegate.call(this, x, y, z, args);
};
G__2479.cljs$lang$maxFixedArity = 3;
G__2479.cljs$lang$applyTo = (function (arglist__2480){
var x = cljs.core.first(arglist__2480);
var y = cljs.core.first(cljs.core.next(arglist__2480));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2480)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2480)));
return G__2479__delegate.call(this, x, y, z, args);
});
return G__2479;
})()
;
G__2472 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2472__2473.call(this);
case  1 :
return G__2472__2474.call(this,x);
case  2 :
return G__2472__2475.call(this,x,y);
case  3 :
return G__2472__2476.call(this,x,y,z);
default:
return G__2472__2477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2472.cljs$lang$maxFixedArity = 3;
G__2472.cljs$lang$applyTo = G__2472__2477.cljs$lang$applyTo;
return G__2472;
})()
});
var comp__2461 = (function() { 
var G__2481__delegate = function (f1,f2,f3,fs){
var fs__2454 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2482__delegate = function (args){
var ret__2455 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2454),args);
var fs__2456 = cljs.core.next.call(null,fs__2454);

while(true){
if(cljs.core.truth_(fs__2456))
{{
var G__2483 = cljs.core.first.call(null,fs__2456).call(null,ret__2455);
var G__2484 = cljs.core.next.call(null,fs__2456);
ret__2455 = G__2483;
fs__2456 = G__2484;
continue;
}
} else
{return ret__2455;
}
break;
}
};
var G__2482 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2482__delegate.call(this, args);
};
G__2482.cljs$lang$maxFixedArity = 0;
G__2482.cljs$lang$applyTo = (function (arglist__2485){
var args = cljs.core.seq( arglist__2485 );;
return G__2482__delegate.call(this, args);
});
return G__2482;
})()
;
};
var G__2481 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2481__delegate.call(this, f1, f2, f3, fs);
};
G__2481.cljs$lang$maxFixedArity = 3;
G__2481.cljs$lang$applyTo = (function (arglist__2486){
var f1 = cljs.core.first(arglist__2486);
var f2 = cljs.core.first(cljs.core.next(arglist__2486));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2486)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2486)));
return G__2481__delegate.call(this, f1, f2, f3, fs);
});
return G__2481;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2457.call(this);
case  1 :
return comp__2458.call(this,f1);
case  2 :
return comp__2459.call(this,f1,f2);
case  3 :
return comp__2460.call(this,f1,f2,f3);
default:
return comp__2461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2461.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2487 = (function (f,arg1){
return (function() { 
var G__2492__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2492 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2492__delegate.call(this, args);
};
G__2492.cljs$lang$maxFixedArity = 0;
G__2492.cljs$lang$applyTo = (function (arglist__2493){
var args = cljs.core.seq( arglist__2493 );;
return G__2492__delegate.call(this, args);
});
return G__2492;
})()
;
});
var partial__2488 = (function (f,arg1,arg2){
return (function() { 
var G__2494__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2494 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2494__delegate.call(this, args);
};
G__2494.cljs$lang$maxFixedArity = 0;
G__2494.cljs$lang$applyTo = (function (arglist__2495){
var args = cljs.core.seq( arglist__2495 );;
return G__2494__delegate.call(this, args);
});
return G__2494;
})()
;
});
var partial__2489 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2496__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2496 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2496__delegate.call(this, args);
};
G__2496.cljs$lang$maxFixedArity = 0;
G__2496.cljs$lang$applyTo = (function (arglist__2497){
var args = cljs.core.seq( arglist__2497 );;
return G__2496__delegate.call(this, args);
});
return G__2496;
})()
;
});
var partial__2490 = (function() { 
var G__2498__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2499__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2499 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2499__delegate.call(this, args);
};
G__2499.cljs$lang$maxFixedArity = 0;
G__2499.cljs$lang$applyTo = (function (arglist__2500){
var args = cljs.core.seq( arglist__2500 );;
return G__2499__delegate.call(this, args);
});
return G__2499;
})()
;
};
var G__2498 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2498__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2498.cljs$lang$maxFixedArity = 4;
G__2498.cljs$lang$applyTo = (function (arglist__2501){
var f = cljs.core.first(arglist__2501);
var arg1 = cljs.core.first(cljs.core.next(arglist__2501));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2501)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2501))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2501))));
return G__2498__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2498;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2487.call(this,f,arg1);
case  3 :
return partial__2488.call(this,f,arg1,arg2);
case  4 :
return partial__2489.call(this,f,arg1,arg2,arg3);
default:
return partial__2490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2490.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2502 = (function (f,x){
return (function() {
var G__2506 = null;
var G__2506__2507 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2506__2508 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2506__2509 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2506__2510 = (function() { 
var G__2512__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2512 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2512__delegate.call(this, a, b, c, ds);
};
G__2512.cljs$lang$maxFixedArity = 3;
G__2512.cljs$lang$applyTo = (function (arglist__2513){
var a = cljs.core.first(arglist__2513);
var b = cljs.core.first(cljs.core.next(arglist__2513));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2513)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2513)));
return G__2512__delegate.call(this, a, b, c, ds);
});
return G__2512;
})()
;
G__2506 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2506__2507.call(this,a);
case  2 :
return G__2506__2508.call(this,a,b);
case  3 :
return G__2506__2509.call(this,a,b,c);
default:
return G__2506__2510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2506.cljs$lang$maxFixedArity = 3;
G__2506.cljs$lang$applyTo = G__2506__2510.cljs$lang$applyTo;
return G__2506;
})()
});
var fnil__2503 = (function (f,x,y){
return (function() {
var G__2514 = null;
var G__2514__2515 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2514__2516 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2514__2517 = (function() { 
var G__2519__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2519 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2519__delegate.call(this, a, b, c, ds);
};
G__2519.cljs$lang$maxFixedArity = 3;
G__2519.cljs$lang$applyTo = (function (arglist__2520){
var a = cljs.core.first(arglist__2520);
var b = cljs.core.first(cljs.core.next(arglist__2520));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2520)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2520)));
return G__2519__delegate.call(this, a, b, c, ds);
});
return G__2519;
})()
;
G__2514 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2514__2515.call(this,a,b);
case  3 :
return G__2514__2516.call(this,a,b,c);
default:
return G__2514__2517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2514.cljs$lang$maxFixedArity = 3;
G__2514.cljs$lang$applyTo = G__2514__2517.cljs$lang$applyTo;
return G__2514;
})()
});
var fnil__2504 = (function (f,x,y,z){
return (function() {
var G__2521 = null;
var G__2521__2522 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2521__2523 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2521__2524 = (function() { 
var G__2526__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2526 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2526__delegate.call(this, a, b, c, ds);
};
G__2526.cljs$lang$maxFixedArity = 3;
G__2526.cljs$lang$applyTo = (function (arglist__2527){
var a = cljs.core.first(arglist__2527);
var b = cljs.core.first(cljs.core.next(arglist__2527));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2527)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2527)));
return G__2526__delegate.call(this, a, b, c, ds);
});
return G__2526;
})()
;
G__2521 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2521__2522.call(this,a,b);
case  3 :
return G__2521__2523.call(this,a,b,c);
default:
return G__2521__2524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2521.cljs$lang$maxFixedArity = 3;
G__2521.cljs$lang$applyTo = G__2521__2524.cljs$lang$applyTo;
return G__2521;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2502.call(this,f,x);
case  3 :
return fnil__2503.call(this,f,x,y);
case  4 :
return fnil__2504.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__2530 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2528 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2528))
{var s__2529 = temp__3726__auto____2528;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2529)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2529)));
} else
{return null;
}
})));
});

return mapi__2530.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2531 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2531))
{var s__2532 = temp__3726__auto____2531;

var x__2533 = f.call(null,cljs.core.first.call(null,s__2532));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2533)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2532));
} else
{return cljs.core.cons.call(null,x__2533,keep.call(null,f,cljs.core.rest.call(null,s__2532)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__2543 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2540 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2540))
{var s__2541 = temp__3726__auto____2540;

var x__2542 = f.call(null,idx,cljs.core.first.call(null,s__2541));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2542)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2541));
} else
{return cljs.core.cons.call(null,x__2542,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2541)));
}
} else
{return null;
}
})));
});

return keepi__2543.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__2588 = (function (p){
return (function() {
var ep1 = null;
var ep1__2593 = (function (){
return true;
});
var ep1__2594 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2595 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2550 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2550))
{return p.call(null,y);
} else
{return and__3574__auto____2550;
}
})());
});
var ep1__2596 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2551 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2551))
{var and__3574__auto____2552 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2552))
{return p.call(null,z);
} else
{return and__3574__auto____2552;
}
} else
{return and__3574__auto____2551;
}
})());
});
var ep1__2597 = (function() { 
var G__2599__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2553 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2553))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2553;
}
})());
};
var G__2599 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2599__delegate.call(this, x, y, z, args);
};
G__2599.cljs$lang$maxFixedArity = 3;
G__2599.cljs$lang$applyTo = (function (arglist__2600){
var x = cljs.core.first(arglist__2600);
var y = cljs.core.first(cljs.core.next(arglist__2600));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2600)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2600)));
return G__2599__delegate.call(this, x, y, z, args);
});
return G__2599;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2593.call(this);
case  1 :
return ep1__2594.call(this,x);
case  2 :
return ep1__2595.call(this,x,y);
case  3 :
return ep1__2596.call(this,x,y,z);
default:
return ep1__2597.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2597.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2589 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2601 = (function (){
return true;
});
var ep2__2602 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2554 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2554))
{return p2.call(null,x);
} else
{return and__3574__auto____2554;
}
})());
});
var ep2__2603 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2555 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2555))
{var and__3574__auto____2556 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2556))
{var and__3574__auto____2557 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2557))
{return p2.call(null,y);
} else
{return and__3574__auto____2557;
}
} else
{return and__3574__auto____2556;
}
} else
{return and__3574__auto____2555;
}
})());
});
var ep2__2604 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2558 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2558))
{var and__3574__auto____2559 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2559))
{var and__3574__auto____2560 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2560))
{var and__3574__auto____2561 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2561))
{var and__3574__auto____2562 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2562))
{return p2.call(null,z);
} else
{return and__3574__auto____2562;
}
} else
{return and__3574__auto____2561;
}
} else
{return and__3574__auto____2560;
}
} else
{return and__3574__auto____2559;
}
} else
{return and__3574__auto____2558;
}
})());
});
var ep2__2605 = (function() { 
var G__2607__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2563 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2563))
{return cljs.core.every_QMARK_.call(null,(function (p1__2534_SHARP_){
var and__3574__auto____2564 = p1.call(null,p1__2534_SHARP_);

if(cljs.core.truth_(and__3574__auto____2564))
{return p2.call(null,p1__2534_SHARP_);
} else
{return and__3574__auto____2564;
}
}),args);
} else
{return and__3574__auto____2563;
}
})());
};
var G__2607 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2607__delegate.call(this, x, y, z, args);
};
G__2607.cljs$lang$maxFixedArity = 3;
G__2607.cljs$lang$applyTo = (function (arglist__2608){
var x = cljs.core.first(arglist__2608);
var y = cljs.core.first(cljs.core.next(arglist__2608));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2608)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2608)));
return G__2607__delegate.call(this, x, y, z, args);
});
return G__2607;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2601.call(this);
case  1 :
return ep2__2602.call(this,x);
case  2 :
return ep2__2603.call(this,x,y);
case  3 :
return ep2__2604.call(this,x,y,z);
default:
return ep2__2605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2605.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2590 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2609 = (function (){
return true;
});
var ep3__2610 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2565 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2565))
{var and__3574__auto____2566 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2566))
{return p3.call(null,x);
} else
{return and__3574__auto____2566;
}
} else
{return and__3574__auto____2565;
}
})());
});
var ep3__2611 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2567 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2567))
{var and__3574__auto____2568 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2568))
{var and__3574__auto____2569 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2569))
{var and__3574__auto____2570 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2570))
{var and__3574__auto____2571 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2571))
{return p3.call(null,y);
} else
{return and__3574__auto____2571;
}
} else
{return and__3574__auto____2570;
}
} else
{return and__3574__auto____2569;
}
} else
{return and__3574__auto____2568;
}
} else
{return and__3574__auto____2567;
}
})());
});
var ep3__2612 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2572 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2572))
{var and__3574__auto____2573 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2573))
{var and__3574__auto____2574 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2574))
{var and__3574__auto____2575 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2575))
{var and__3574__auto____2576 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2576))
{var and__3574__auto____2577 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2577))
{var and__3574__auto____2578 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2578))
{var and__3574__auto____2579 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2579))
{return p3.call(null,z);
} else
{return and__3574__auto____2579;
}
} else
{return and__3574__auto____2578;
}
} else
{return and__3574__auto____2577;
}
} else
{return and__3574__auto____2576;
}
} else
{return and__3574__auto____2575;
}
} else
{return and__3574__auto____2574;
}
} else
{return and__3574__auto____2573;
}
} else
{return and__3574__auto____2572;
}
})());
});
var ep3__2613 = (function() { 
var G__2615__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2580 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2580))
{return cljs.core.every_QMARK_.call(null,(function (p1__2535_SHARP_){
var and__3574__auto____2581 = p1.call(null,p1__2535_SHARP_);

if(cljs.core.truth_(and__3574__auto____2581))
{var and__3574__auto____2582 = p2.call(null,p1__2535_SHARP_);

if(cljs.core.truth_(and__3574__auto____2582))
{return p3.call(null,p1__2535_SHARP_);
} else
{return and__3574__auto____2582;
}
} else
{return and__3574__auto____2581;
}
}),args);
} else
{return and__3574__auto____2580;
}
})());
};
var G__2615 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2615__delegate.call(this, x, y, z, args);
};
G__2615.cljs$lang$maxFixedArity = 3;
G__2615.cljs$lang$applyTo = (function (arglist__2616){
var x = cljs.core.first(arglist__2616);
var y = cljs.core.first(cljs.core.next(arglist__2616));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2616)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2616)));
return G__2615__delegate.call(this, x, y, z, args);
});
return G__2615;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2609.call(this);
case  1 :
return ep3__2610.call(this,x);
case  2 :
return ep3__2611.call(this,x,y);
case  3 :
return ep3__2612.call(this,x,y,z);
default:
return ep3__2613.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2613.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2591 = (function() { 
var G__2617__delegate = function (p1,p2,p3,ps){
var ps__2583 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2618 = (function (){
return true;
});
var epn__2619 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2536_SHARP_){
return p1__2536_SHARP_.call(null,x);
}),ps__2583);
});
var epn__2620 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2537_SHARP_){
var and__3574__auto____2584 = p1__2537_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2584))
{return p1__2537_SHARP_.call(null,y);
} else
{return and__3574__auto____2584;
}
}),ps__2583);
});
var epn__2621 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2538_SHARP_){
var and__3574__auto____2585 = p1__2538_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2585))
{var and__3574__auto____2586 = p1__2538_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2586))
{return p1__2538_SHARP_.call(null,z);
} else
{return and__3574__auto____2586;
}
} else
{return and__3574__auto____2585;
}
}),ps__2583);
});
var epn__2622 = (function() { 
var G__2624__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2587 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2587))
{return cljs.core.every_QMARK_.call(null,(function (p1__2539_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2539_SHARP_,args);
}),ps__2583);
} else
{return and__3574__auto____2587;
}
})());
};
var G__2624 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2624__delegate.call(this, x, y, z, args);
};
G__2624.cljs$lang$maxFixedArity = 3;
G__2624.cljs$lang$applyTo = (function (arglist__2625){
var x = cljs.core.first(arglist__2625);
var y = cljs.core.first(cljs.core.next(arglist__2625));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2625)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2625)));
return G__2624__delegate.call(this, x, y, z, args);
});
return G__2624;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2618.call(this);
case  1 :
return epn__2619.call(this,x);
case  2 :
return epn__2620.call(this,x,y);
case  3 :
return epn__2621.call(this,x,y,z);
default:
return epn__2622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2622.cljs$lang$applyTo;
return epn;
})()
};
var G__2617 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2617__delegate.call(this, p1, p2, p3, ps);
};
G__2617.cljs$lang$maxFixedArity = 3;
G__2617.cljs$lang$applyTo = (function (arglist__2626){
var p1 = cljs.core.first(arglist__2626);
var p2 = cljs.core.first(cljs.core.next(arglist__2626));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2626)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2626)));
return G__2617__delegate.call(this, p1, p2, p3, ps);
});
return G__2617;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2588.call(this,p1);
case  2 :
return every_pred__2589.call(this,p1,p2);
case  3 :
return every_pred__2590.call(this,p1,p2,p3);
default:
return every_pred__2591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2591.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__2666 = (function (p){
return (function() {
var sp1 = null;
var sp1__2671 = (function (){
return null;
});
var sp1__2672 = (function (x){
return p.call(null,x);
});
var sp1__2673 = (function (x,y){
var or__3576__auto____2628 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2628))
{return or__3576__auto____2628;
} else
{return p.call(null,y);
}
});
var sp1__2674 = (function (x,y,z){
var or__3576__auto____2629 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2629))
{return or__3576__auto____2629;
} else
{var or__3576__auto____2630 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2630))
{return or__3576__auto____2630;
} else
{return p.call(null,z);
}
}
});
var sp1__2675 = (function() { 
var G__2677__delegate = function (x,y,z,args){
var or__3576__auto____2631 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2631))
{return or__3576__auto____2631;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2677 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2677__delegate.call(this, x, y, z, args);
};
G__2677.cljs$lang$maxFixedArity = 3;
G__2677.cljs$lang$applyTo = (function (arglist__2678){
var x = cljs.core.first(arglist__2678);
var y = cljs.core.first(cljs.core.next(arglist__2678));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2678)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2678)));
return G__2677__delegate.call(this, x, y, z, args);
});
return G__2677;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2671.call(this);
case  1 :
return sp1__2672.call(this,x);
case  2 :
return sp1__2673.call(this,x,y);
case  3 :
return sp1__2674.call(this,x,y,z);
default:
return sp1__2675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2675.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2667 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2679 = (function (){
return null;
});
var sp2__2680 = (function (x){
var or__3576__auto____2632 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2632))
{return or__3576__auto____2632;
} else
{return p2.call(null,x);
}
});
var sp2__2681 = (function (x,y){
var or__3576__auto____2633 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2633))
{return or__3576__auto____2633;
} else
{var or__3576__auto____2634 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2634))
{return or__3576__auto____2634;
} else
{var or__3576__auto____2635 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2635))
{return or__3576__auto____2635;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2682 = (function (x,y,z){
var or__3576__auto____2636 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2636))
{return or__3576__auto____2636;
} else
{var or__3576__auto____2637 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2637))
{return or__3576__auto____2637;
} else
{var or__3576__auto____2638 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2638))
{return or__3576__auto____2638;
} else
{var or__3576__auto____2639 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2639))
{return or__3576__auto____2639;
} else
{var or__3576__auto____2640 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2640))
{return or__3576__auto____2640;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2683 = (function() { 
var G__2685__delegate = function (x,y,z,args){
var or__3576__auto____2641 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2641))
{return or__3576__auto____2641;
} else
{return cljs.core.some.call(null,(function (p1__2544_SHARP_){
var or__3576__auto____2642 = p1.call(null,p1__2544_SHARP_);

if(cljs.core.truth_(or__3576__auto____2642))
{return or__3576__auto____2642;
} else
{return p2.call(null,p1__2544_SHARP_);
}
}),args);
}
};
var G__2685 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2685__delegate.call(this, x, y, z, args);
};
G__2685.cljs$lang$maxFixedArity = 3;
G__2685.cljs$lang$applyTo = (function (arglist__2686){
var x = cljs.core.first(arglist__2686);
var y = cljs.core.first(cljs.core.next(arglist__2686));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2686)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2686)));
return G__2685__delegate.call(this, x, y, z, args);
});
return G__2685;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2679.call(this);
case  1 :
return sp2__2680.call(this,x);
case  2 :
return sp2__2681.call(this,x,y);
case  3 :
return sp2__2682.call(this,x,y,z);
default:
return sp2__2683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2683.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2668 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2687 = (function (){
return null;
});
var sp3__2688 = (function (x){
var or__3576__auto____2643 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2643))
{return or__3576__auto____2643;
} else
{var or__3576__auto____2644 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2644))
{return or__3576__auto____2644;
} else
{return p3.call(null,x);
}
}
});
var sp3__2689 = (function (x,y){
var or__3576__auto____2645 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2645))
{return or__3576__auto____2645;
} else
{var or__3576__auto____2646 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2646))
{return or__3576__auto____2646;
} else
{var or__3576__auto____2647 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2647))
{return or__3576__auto____2647;
} else
{var or__3576__auto____2648 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2648))
{return or__3576__auto____2648;
} else
{var or__3576__auto____2649 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2649))
{return or__3576__auto____2649;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2690 = (function (x,y,z){
var or__3576__auto____2650 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2650))
{return or__3576__auto____2650;
} else
{var or__3576__auto____2651 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2651))
{return or__3576__auto____2651;
} else
{var or__3576__auto____2652 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2652))
{return or__3576__auto____2652;
} else
{var or__3576__auto____2653 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2653))
{return or__3576__auto____2653;
} else
{var or__3576__auto____2654 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2654))
{return or__3576__auto____2654;
} else
{var or__3576__auto____2655 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2655))
{return or__3576__auto____2655;
} else
{var or__3576__auto____2656 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2656))
{return or__3576__auto____2656;
} else
{var or__3576__auto____2657 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2657))
{return or__3576__auto____2657;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__2691 = (function() { 
var G__2693__delegate = function (x,y,z,args){
var or__3576__auto____2658 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2658))
{return or__3576__auto____2658;
} else
{return cljs.core.some.call(null,(function (p1__2545_SHARP_){
var or__3576__auto____2659 = p1.call(null,p1__2545_SHARP_);

if(cljs.core.truth_(or__3576__auto____2659))
{return or__3576__auto____2659;
} else
{var or__3576__auto____2660 = p2.call(null,p1__2545_SHARP_);

if(cljs.core.truth_(or__3576__auto____2660))
{return or__3576__auto____2660;
} else
{return p3.call(null,p1__2545_SHARP_);
}
}
}),args);
}
};
var G__2693 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2693__delegate.call(this, x, y, z, args);
};
G__2693.cljs$lang$maxFixedArity = 3;
G__2693.cljs$lang$applyTo = (function (arglist__2694){
var x = cljs.core.first(arglist__2694);
var y = cljs.core.first(cljs.core.next(arglist__2694));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2694)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2694)));
return G__2693__delegate.call(this, x, y, z, args);
});
return G__2693;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2687.call(this);
case  1 :
return sp3__2688.call(this,x);
case  2 :
return sp3__2689.call(this,x,y);
case  3 :
return sp3__2690.call(this,x,y,z);
default:
return sp3__2691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2691.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2669 = (function() { 
var G__2695__delegate = function (p1,p2,p3,ps){
var ps__2661 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2696 = (function (){
return null;
});
var spn__2697 = (function (x){
return cljs.core.some.call(null,(function (p1__2546_SHARP_){
return p1__2546_SHARP_.call(null,x);
}),ps__2661);
});
var spn__2698 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2547_SHARP_){
var or__3576__auto____2662 = p1__2547_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2662))
{return or__3576__auto____2662;
} else
{return p1__2547_SHARP_.call(null,y);
}
}),ps__2661);
});
var spn__2699 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2548_SHARP_){
var or__3576__auto____2663 = p1__2548_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2663))
{return or__3576__auto____2663;
} else
{var or__3576__auto____2664 = p1__2548_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2664))
{return or__3576__auto____2664;
} else
{return p1__2548_SHARP_.call(null,z);
}
}
}),ps__2661);
});
var spn__2700 = (function() { 
var G__2702__delegate = function (x,y,z,args){
var or__3576__auto____2665 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2665))
{return or__3576__auto____2665;
} else
{return cljs.core.some.call(null,(function (p1__2549_SHARP_){
return cljs.core.some.call(null,p1__2549_SHARP_,args);
}),ps__2661);
}
};
var G__2702 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2702__delegate.call(this, x, y, z, args);
};
G__2702.cljs$lang$maxFixedArity = 3;
G__2702.cljs$lang$applyTo = (function (arglist__2703){
var x = cljs.core.first(arglist__2703);
var y = cljs.core.first(cljs.core.next(arglist__2703));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2703)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2703)));
return G__2702__delegate.call(this, x, y, z, args);
});
return G__2702;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2696.call(this);
case  1 :
return spn__2697.call(this,x);
case  2 :
return spn__2698.call(this,x,y);
case  3 :
return spn__2699.call(this,x,y,z);
default:
return spn__2700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2700.cljs$lang$applyTo;
return spn;
})()
};
var G__2695 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2695__delegate.call(this, p1, p2, p3, ps);
};
G__2695.cljs$lang$maxFixedArity = 3;
G__2695.cljs$lang$applyTo = (function (arglist__2704){
var p1 = cljs.core.first(arglist__2704);
var p2 = cljs.core.first(cljs.core.next(arglist__2704));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2704)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2704)));
return G__2695__delegate.call(this, p1, p2, p3, ps);
});
return G__2695;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2666.call(this,p1);
case  2 :
return some_fn__2667.call(this,p1,p2);
case  3 :
return some_fn__2668.call(this,p1,p2,p3);
default:
return some_fn__2669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2669.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2717 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2705 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2705))
{var s__2706 = temp__3726__auto____2705;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2706)),map.call(null,f,cljs.core.rest.call(null,s__2706)));
} else
{return null;
}
})));
});
var map__2718 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2707 = cljs.core.seq.call(null,c1);
var s2__2708 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2709 = s1__2707;

if(cljs.core.truth_(and__3574__auto____2709))
{return s2__2708;
} else
{return and__3574__auto____2709;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2707),cljs.core.first.call(null,s2__2708)),map.call(null,f,cljs.core.rest.call(null,s1__2707),cljs.core.rest.call(null,s2__2708)));
} else
{return null;
}
})));
});
var map__2719 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2710 = cljs.core.seq.call(null,c1);
var s2__2711 = cljs.core.seq.call(null,c2);
var s3__2712 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2713 = s1__2710;

if(cljs.core.truth_(and__3574__auto____2713))
{var and__3574__auto____2714 = s2__2711;

if(cljs.core.truth_(and__3574__auto____2714))
{return s3__2712;
} else
{return and__3574__auto____2714;
}
} else
{return and__3574__auto____2713;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2710),cljs.core.first.call(null,s2__2711),cljs.core.first.call(null,s3__2712)),map.call(null,f,cljs.core.rest.call(null,s1__2710),cljs.core.rest.call(null,s2__2711),cljs.core.rest.call(null,s3__2712)));
} else
{return null;
}
})));
});
var map__2720 = (function() { 
var G__2722__delegate = function (f,c1,c2,c3,colls){
var step__2716 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2715 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2715)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2715),step.call(null,map.call(null,cljs.core.rest,ss__2715)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2627_SHARP_){
return cljs.core.apply.call(null,f,p1__2627_SHARP_);
}),step__2716.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2722 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2722__delegate.call(this, f, c1, c2, c3, colls);
};
G__2722.cljs$lang$maxFixedArity = 4;
G__2722.cljs$lang$applyTo = (function (arglist__2723){
var f = cljs.core.first(arglist__2723);
var c1 = cljs.core.first(cljs.core.next(arglist__2723));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2723)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2723))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2723))));
return G__2722__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2722;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2717.call(this,f,c1);
case  3 :
return map__2718.call(this,f,c1,c2);
case  4 :
return map__2719.call(this,f,c1,c2,c3);
default:
return map__2720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2720.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____2724 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2724))
{var s__2725 = temp__3726__auto____2724;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2725),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2725)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__2728 = (function (n,coll){
while(true){
var s__2726 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2727 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2727))
{return s__2726;
} else
{return and__3574__auto____2727;
}
})()))
{{
var G__2729 = cljs.core.dec.call(null,n);
var G__2730 = cljs.core.rest.call(null,s__2726);
n = G__2729;
coll = G__2730;
continue;
}
} else
{return s__2726;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2728.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2731 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2732 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2731.call(this,n);
case  2 :
return drop_last__2732.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__2734 = cljs.core.seq.call(null,coll);
var lead__2735 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2735))
{{
var G__2736 = cljs.core.next.call(null,s__2734);
var G__2737 = cljs.core.next.call(null,lead__2735);
s__2734 = G__2736;
lead__2735 = G__2737;
continue;
}
} else
{return s__2734;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2740 = (function (pred,coll){
while(true){
var s__2738 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2739 = s__2738;

if(cljs.core.truth_(and__3574__auto____2739))
{return pred.call(null,cljs.core.first.call(null,s__2738));
} else
{return and__3574__auto____2739;
}
})()))
{{
var G__2741 = pred;
var G__2742 = cljs.core.rest.call(null,s__2738);
pred = G__2741;
coll = G__2742;
continue;
}
} else
{return s__2738;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2740.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2743 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2743))
{var s__2744 = temp__3726__auto____2743;

return cljs.core.concat.call(null,s__2744,cycle.call(null,s__2744));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__2745 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2746 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2745.call(this,n);
case  2 :
return repeat__2746.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__2748 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2749 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2748.call(this,n);
case  2 :
return repeatedly__2749.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2755 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2751 = cljs.core.seq.call(null,c1);
var s2__2752 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2753 = s1__2751;

if(cljs.core.truth_(and__3574__auto____2753))
{return s2__2752;
} else
{return and__3574__auto____2753;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2751),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2752),interleave.call(null,cljs.core.rest.call(null,s1__2751),cljs.core.rest.call(null,s2__2752))));
} else
{return null;
}
})));
});
var interleave__2756 = (function() { 
var G__2758__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2754 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2754)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2754),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2754)));
} else
{return null;
}
})));
};
var G__2758 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2758__delegate.call(this, c1, c2, colls);
};
G__2758.cljs$lang$maxFixedArity = 2;
G__2758.cljs$lang$applyTo = (function (arglist__2759){
var c1 = cljs.core.first(arglist__2759);
var c2 = cljs.core.first(cljs.core.next(arglist__2759));
var colls = cljs.core.rest(cljs.core.next(arglist__2759));
return G__2758__delegate.call(this, c1, c2, colls);
});
return G__2758;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2755.call(this,c1,c2);
default:
return interleave__2756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2756.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__2762 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2760))
{var coll__2761 = temp__3723__auto____2760;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2761),cat.call(null,cljs.core.rest.call(null,coll__2761),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2762.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2763 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2764 = (function() { 
var G__2766__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2766 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2766__delegate.call(this, f, coll, colls);
};
G__2766.cljs$lang$maxFixedArity = 2;
G__2766.cljs$lang$applyTo = (function (arglist__2767){
var f = cljs.core.first(arglist__2767);
var coll = cljs.core.first(cljs.core.next(arglist__2767));
var colls = cljs.core.rest(cljs.core.next(arglist__2767));
return G__2766__delegate.call(this, f, coll, colls);
});
return G__2766;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2763.call(this,f,coll);
default:
return mapcat__2764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2764.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2768 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2768))
{var s__2769 = temp__3726__auto____2768;

var f__2770 = cljs.core.first.call(null,s__2769);
var r__2771 = cljs.core.rest.call(null,s__2769);

if(cljs.core.truth_(pred.call(null,f__2770)))
{return cljs.core.cons.call(null,f__2770,filter.call(null,pred,r__2771));
} else
{return filter.call(null,pred,r__2771);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__2773 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2773.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2772_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2772_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2780 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2781 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2774 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2774))
{var s__2775 = temp__3726__auto____2774;

var p__2776 = cljs.core.take.call(null,n,s__2775);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2776))))
{return cljs.core.cons.call(null,p__2776,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2775)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2782 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2777 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2777))
{var s__2778 = temp__3726__auto____2777;

var p__2779 = cljs.core.take.call(null,n,s__2778);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2779))))
{return cljs.core.cons.call(null,p__2779,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2778)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2779,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2780.call(this,n,step);
case  3 :
return partition__2781.call(this,n,step,pad);
case  4 :
return partition__2782.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2788 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2789 = (function (m,ks,not_found){
var sentinel__2784 = cljs.core.lookup_sentinel;
var m__2785 = m;
var ks__2786 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2786))
{var m__2787 = cljs.core.get.call(null,m__2785,cljs.core.first.call(null,ks__2786),sentinel__2784);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2784,m__2787)))
{return not_found;
} else
{{
var G__2791 = sentinel__2784;
var G__2792 = m__2787;
var G__2793 = cljs.core.next.call(null,ks__2786);
sentinel__2784 = G__2791;
m__2785 = G__2792;
ks__2786 = G__2793;
continue;
}
}
} else
{return m__2785;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2788.call(this,m,ks);
case  3 :
return get_in__2789.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__2794,v){
var vec__2795__2796 = p__2794;
var k__2797 = cljs.core.nth.call(null,vec__2795__2796,0,null);
var ks__2798 = cljs.core.nthnext.call(null,vec__2795__2796,1);

if(cljs.core.truth_(ks__2798))
{return cljs.core.assoc.call(null,m,k__2797,assoc_in.call(null,cljs.core.get.call(null,m,k__2797),ks__2798,v));
} else
{return cljs.core.assoc.call(null,m,k__2797,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__2799,f,args){
var vec__2800__2801 = p__2799;
var k__2802 = cljs.core.nth.call(null,vec__2800__2801,0,null);
var ks__2803 = cljs.core.nthnext.call(null,vec__2800__2801,1);

if(cljs.core.truth_(ks__2803))
{return cljs.core.assoc.call(null,m,k__2802,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2802),ks__2803,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2802,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2802),args));
}
};
var update_in = function (m,p__2799,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2799, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2804){
var m = cljs.core.first(arglist__2804);
var p__2799 = cljs.core.first(cljs.core.next(arglist__2804));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2804)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2804)));
return update_in__delegate.call(this, m, p__2799, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2805 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2806 = this;
var new_array__2807 = cljs.core.aclone.call(null,this__2806.array);

new_array__2807.push(o);
return (new cljs.core.Vector(this__2806.meta,new_array__2807));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2808 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2808.array.length,0)))
{var vector_seq__2809 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2808.array.length)))
{return cljs.core.cons.call(null,(this__2808.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2809.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2810 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2811 = this;
var count__2812 = this__2811.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2812,0)))
{return (this__2811.array[cljs.core.dec.call(null,count__2812)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2813 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2813.array.length,0)))
{var new_array__2814 = cljs.core.aclone.call(null,this__2813.array);

new_array__2814.pop();
return (new cljs.core.Vector(this__2813.meta,new_array__2814));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2815 = this;
return (new cljs.core.Vector(meta,this__2815.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2816 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2816.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2830 = null;
var G__2830__2831 = (function (coll,n){
var this__2817 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2818 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2818))
{return cljs.core._LT_.call(null,n,this__2817.array.length);
} else
{return and__3574__auto____2818;
}
})()))
{return (this__2817.array[n]);
} else
{return null;
}
});
var G__2830__2832 = (function (coll,n,not_found){
var this__2819 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2820 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2820))
{return cljs.core._LT_.call(null,n,this__2819.array.length);
} else
{return and__3574__auto____2820;
}
})()))
{return (this__2819.array[n]);
} else
{return not_found;
}
});
G__2830 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2830__2831.call(this,coll,n);
case  3 :
return G__2830__2832.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2830;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2821 = this;
return this__2821.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2834 = null;
var G__2834__2835 = (function (v,f){
var this__2822 = this;
return cljs.core.ci_reduce.call(null,this__2822.array,f);
});
var G__2834__2836 = (function (v,f,start){
var this__2823 = this;
return cljs.core.ci_reduce.call(null,this__2823.array,f,start);
});
G__2834 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2834__2835.call(this,v,f);
case  3 :
return G__2834__2836.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2834;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2824 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2825 = this;
return this__2825.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2826 = this;
var new_array__2827 = cljs.core.aclone.call(null,this__2826.array);

(new_array__2827[k] = v);
return (new cljs.core.Vector(this__2826.meta,new_array__2827));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2838 = null;
var G__2838__2839 = (function (coll,k){
var this__2828 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2838__2840 = (function (coll,k,not_found){
var this__2829 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2838 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2838__2839.call(this,coll,k);
case  3 :
return G__2838__2840.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2838;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2842 = null;
var G__2842__2843 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2842__2844 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2842 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2842__2843.call(this,_,k);
case  3 :
return G__2842__2844.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2842;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__2846){
var args = cljs.core.seq( arglist__2846 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__2847 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__2848 = array.length;

var i__2849 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2849,len__2848)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2849]))))
{return i__2849;
} else
{{
var G__2850 = cljs.core._PLUS_.call(null,i__2849,incr);
i__2849 = G__2850;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___2852 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2853 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2851 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2851))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2851;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___2852.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2853.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2856 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2857 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2858 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2858.keys.length)))
{return cljs.core.map.call(null,(function (p1__2855_SHARP_){
return cljs.core.vector.call(null,p1__2855_SHARP_,(this__2858.strobj[p1__2855_SHARP_]));
}),this__2858.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2859 = this;
return (new cljs.core.ObjMap(meta,this__2859.keys,this__2859.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2860 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2861 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2861))
{return this__2860.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2861;
}
})()))
{var new_keys__2862 = cljs.core.aclone.call(null,this__2860.keys);
var new_strobj__2863 = goog.object.clone.call(null,this__2860.strobj);

new_keys__2862.splice(cljs.core.scan_array.call(null,1,k,new_keys__2862),1);
cljs.core.js_delete.call(null,new_strobj__2863,k);
return (new cljs.core.ObjMap(this__2860.meta,new_keys__2862,new_strobj__2863));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2864 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2864.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2865 = this;
return this__2865.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2866 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2867 = this;
return this__2867.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2868 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2869 = goog.object.clone.call(null,this__2868.strobj);
var overwrite_QMARK___2870 = new_strobj__2869.hasOwnProperty(k);

(new_strobj__2869[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2870))
{return (new cljs.core.ObjMap(this__2868.meta,this__2868.keys,new_strobj__2869));
} else
{var new_keys__2871 = cljs.core.aclone.call(null,this__2868.keys);

new_keys__2871.push(k);
return (new cljs.core.ObjMap(this__2868.meta,new_keys__2871,new_strobj__2869));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2868.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2872 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2872.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2875 = null;
var G__2875__2876 = (function (coll,k){
var this__2873 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2875__2877 = (function (coll,k,not_found){
var this__2874 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2874.strobj,(this__2874.strobj[k]),not_found);
});
G__2875 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2875__2876.call(this,coll,k);
case  3 :
return G__2875__2877.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2875;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2880 = null;
var G__2880__2881 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2880__2882 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2880 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2880__2881.call(this,_,k);
case  3 :
return G__2880__2882.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2880;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2884 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2885 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2886 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2886.count)))
{var hashes__2887 = cljs.core.js_keys.call(null,this__2886.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2879_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2886.hashobj[p1__2879_SHARP_])));
}),hashes__2887);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2888 = this;
return (new cljs.core.HashMap(meta,this__2888.count,this__2888.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2889 = this;
var h__2890 = cljs.core.hash.call(null,k);
var bucket__2891 = (this__2889.hashobj[h__2890]);
var i__2892 = (cljs.core.truth_(bucket__2891)?cljs.core.scan_array.call(null,2,k,bucket__2891):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2892)))
{return coll;
} else
{var new_hashobj__2893 = goog.object.clone.call(null,this__2889.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2891.length)))
{cljs.core.js_delete.call(null,new_hashobj__2893,h__2890);
} else
{var new_bucket__2894 = cljs.core.aclone.call(null,bucket__2891);

new_bucket__2894.splice(i__2892,2);
(new_hashobj__2893[h__2890] = new_bucket__2894);
}
return (new cljs.core.HashMap(this__2889.meta,cljs.core.dec.call(null,this__2889.count),new_hashobj__2893));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2895 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2895.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2896 = this;
return this__2896.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2897 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2898 = this;
return this__2898.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2899 = this;
var h__2900 = cljs.core.hash.call(null,k);
var bucket__2901 = (this__2899.hashobj[h__2900]);

if(cljs.core.truth_(bucket__2901))
{var new_bucket__2902 = cljs.core.aclone.call(null,bucket__2901);
var new_hashobj__2903 = goog.object.clone.call(null,this__2899.hashobj);

(new_hashobj__2903[h__2900] = new_bucket__2902);
var temp__3723__auto____2904 = cljs.core.scan_array.call(null,2,k,new_bucket__2902);

if(cljs.core.truth_(temp__3723__auto____2904))
{var i__2905 = temp__3723__auto____2904;

(new_bucket__2902[cljs.core.inc.call(null,i__2905)] = v);
return (new cljs.core.HashMap(this__2899.meta,this__2899.count,new_hashobj__2903));
} else
{new_bucket__2902.push(k,v);
return (new cljs.core.HashMap(this__2899.meta,cljs.core.inc.call(null,this__2899.count),new_hashobj__2903));
}
} else
{var new_hashobj__2906 = goog.object.clone.call(null,this__2899.hashobj);

(new_hashobj__2906[h__2900] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2899.meta,cljs.core.inc.call(null,this__2899.count),new_hashobj__2906));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2907 = this;
var bucket__2908 = (this__2907.hashobj[cljs.core.hash.call(null,k)]);
var i__2909 = (cljs.core.truth_(bucket__2908)?cljs.core.scan_array.call(null,2,k,bucket__2908):null);

if(cljs.core.truth_(i__2909))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2914 = null;
var G__2914__2915 = (function (coll,k){
var this__2910 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2914__2916 = (function (coll,k,not_found){
var this__2911 = this;
var bucket__2912 = (this__2911.hashobj[cljs.core.hash.call(null,k)]);
var i__2913 = (cljs.core.truth_(bucket__2912)?cljs.core.scan_array.call(null,2,k,bucket__2912):null);

if(cljs.core.truth_(i__2913))
{return (bucket__2912[cljs.core.inc.call(null,i__2913)]);
} else
{return not_found;
}
});
G__2914 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2914__2915.call(this,coll,k);
case  3 :
return G__2914__2916.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2914;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__2918 = ks.length;

var i__2919 = 0;
var out__2920 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2919,len__2918)))
{{
var G__2921 = cljs.core.inc.call(null,i__2919);
var G__2922 = cljs.core.assoc.call(null,out__2920,(ks[i__2919]),(vs[i__2919]));
i__2919 = G__2921;
out__2920 = G__2922;
continue;
}
} else
{return out__2920;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__2923 = null;
var G__2923__2924 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2923__2925 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2923 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2923__2924.call(this,_,k);
case  3 :
return G__2923__2925.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2923;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__2927 = cljs.core.seq.call(null,keyvals);
var out__2928 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__2927))
{{
var G__2929 = cljs.core.nnext.call(null,in$__2927);
var G__2930 = cljs.core.assoc.call(null,out__2928,cljs.core.first.call(null,in$__2927),cljs.core.second.call(null,in$__2927));
in$__2927 = G__2929;
out__2928 = G__2930;
continue;
}
} else
{return out__2928;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__2931){
var keyvals = cljs.core.seq( arglist__2931 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__2932_SHARP_,p2__2933_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____2934 = p1__2932_SHARP_;

if(cljs.core.truth_(or__3576__auto____2934))
{return or__3576__auto____2934;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__2933_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__2935){
var maps = cljs.core.seq( arglist__2935 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__2938 = (function (m,e){
var k__2936 = cljs.core.first.call(null,e);
var v__2937 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__2936)))
{return cljs.core.assoc.call(null,m,k__2936,f.call(null,cljs.core.get.call(null,m,k__2936),v__2937));
} else
{return cljs.core.assoc.call(null,m,k__2936,v__2937);
}
});
var merge2__2940 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__2938,(function (){var or__3576__auto____2939 = m1;

if(cljs.core.truth_(or__3576__auto____2939))
{return or__3576__auto____2939;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__2940,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__2941){
var f = cljs.core.first(arglist__2941);
var maps = cljs.core.rest(arglist__2941);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__2943 = cljs.core.ObjMap.fromObject([],{});
var keys__2944 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__2944))
{var key__2945 = cljs.core.first.call(null,keys__2944);
var entry__2946 = cljs.core.get.call(null,map,key__2945);

{
var G__2947 = (cljs.core.truth_(entry__2946)?cljs.core.assoc.call(null,ret__2943,key__2945,entry__2946):ret__2943);
var G__2948 = cljs.core.next.call(null,keys__2944);
ret__2943 = G__2947;
keys__2944 = G__2948;
continue;
}
} else
{return ret__2943;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__2949 = this;
return (new cljs.core.Set(this__2949.meta,cljs.core.dissoc.call(null,this__2949.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2950 = this;
var and__3574__auto____2951 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____2951))
{var and__3574__auto____2952 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____2952))
{return cljs.core.every_QMARK_.call(null,(function (p1__2942_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__2942_SHARP_);
}),other);
} else
{return and__3574__auto____2952;
}
} else
{return and__3574__auto____2951;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2953 = this;
return (new cljs.core.Set(this__2953.meta,cljs.core.assoc.call(null,this__2953.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2954 = this;
return cljs.core.keys.call(null,this__2954.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2955 = this;
return (new cljs.core.Set(meta,this__2955.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2956 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__2956.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2957 = this;
return this__2957.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2958 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2959 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2962 = null;
var G__2962__2963 = (function (coll,v){
var this__2960 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__2962__2964 = (function (coll,v,not_found){
var this__2961 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__2961.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__2962 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__2962__2963.call(this,coll,v);
case  3 :
return G__2962__2964.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2962;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__2966 = null;
var G__2966__2967 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2966__2968 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2966 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2966__2967.call(this,_,k);
case  3 :
return G__2966__2968.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2966;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__2971 = cljs.core.seq.call(null,coll);
var out__2972 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__2971))))
{{
var G__2973 = cljs.core.rest.call(null,in$__2971);
var G__2974 = cljs.core.conj.call(null,out__2972,cljs.core.first.call(null,in$__2971));
in$__2971 = G__2973;
out__2972 = G__2974;
continue;
}
} else
{return out__2972;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__2975 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____2976 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____2976))
{var e__2977 = temp__3723__auto____2976;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__2977));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__2975,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__2970_SHARP_){
var temp__3723__auto____2978 = cljs.core.find.call(null,smap,p1__2970_SHARP_);

if(cljs.core.truth_(temp__3723__auto____2978))
{var e__2979 = temp__3723__auto____2978;

return cljs.core.second.call(null,e__2979);
} else
{return p1__2970_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__2987 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__2980,seen){
while(true){
var vec__2981__2982 = p__2980;
var f__2983 = cljs.core.nth.call(null,vec__2981__2982,0,null);
var xs__2984 = vec__2981__2982;

var temp__3726__auto____2985 = cljs.core.seq.call(null,xs__2984);

if(cljs.core.truth_(temp__3726__auto____2985))
{var s__2986 = temp__3726__auto____2985;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__2983)))
{{
var G__2988 = cljs.core.rest.call(null,s__2986);
var G__2989 = seen;
p__2980 = G__2988;
seen = G__2989;
continue;
}
} else
{return cljs.core.cons.call(null,f__2983,step.call(null,cljs.core.rest.call(null,s__2986),cljs.core.conj.call(null,seen,f__2983)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__2987.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__2990 = cljs.core.Vector.fromArray([]);
var s__2991 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__2991)))
{{
var G__2992 = cljs.core.conj.call(null,ret__2990,cljs.core.first.call(null,s__2991));
var G__2993 = cljs.core.next.call(null,s__2991);
ret__2990 = G__2992;
s__2991 = G__2993;
continue;
}
} else
{return cljs.core.seq.call(null,ret__2990);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____2994 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2994))
{return or__3576__auto____2994;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2995 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__2995,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__2995));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____2996 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2996))
{return or__3576__auto____2996;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__2997 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__2997,-1)))
{return cljs.core.subs.call(null,x,2,i__2997);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3000 = cljs.core.ObjMap.fromObject([],{});
var ks__3001 = cljs.core.seq.call(null,keys);
var vs__3002 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3003 = ks__3001;

if(cljs.core.truth_(and__3574__auto____3003))
{return vs__3002;
} else
{return and__3574__auto____3003;
}
})()))
{{
var G__3004 = cljs.core.assoc.call(null,map__3000,cljs.core.first.call(null,ks__3001),cljs.core.first.call(null,vs__3002));
var G__3005 = cljs.core.next.call(null,ks__3001);
var G__3006 = cljs.core.next.call(null,vs__3002);
map__3000 = G__3004;
ks__3001 = G__3005;
vs__3002 = G__3006;
continue;
}
} else
{return map__3000;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3009 = (function (k,x){
return x;
});
var max_key__3010 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3011 = (function() { 
var G__3013__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__2998_SHARP_,p2__2999_SHARP_){
return max_key.call(null,k,p1__2998_SHARP_,p2__2999_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3013 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3013__delegate.call(this, k, x, y, more);
};
G__3013.cljs$lang$maxFixedArity = 3;
G__3013.cljs$lang$applyTo = (function (arglist__3014){
var k = cljs.core.first(arglist__3014);
var x = cljs.core.first(cljs.core.next(arglist__3014));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3014)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3014)));
return G__3013__delegate.call(this, k, x, y, more);
});
return G__3013;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3009.call(this,k,x);
case  3 :
return max_key__3010.call(this,k,x,y);
default:
return max_key__3011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3011.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3015 = (function (k,x){
return x;
});
var min_key__3016 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3017 = (function() { 
var G__3019__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3007_SHARP_,p2__3008_SHARP_){
return min_key.call(null,k,p1__3007_SHARP_,p2__3008_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3019 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3019__delegate.call(this, k, x, y, more);
};
G__3019.cljs$lang$maxFixedArity = 3;
G__3019.cljs$lang$applyTo = (function (arglist__3020){
var k = cljs.core.first(arglist__3020);
var x = cljs.core.first(cljs.core.next(arglist__3020));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3020)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3020)));
return G__3019__delegate.call(this, k, x, y, more);
});
return G__3019;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3015.call(this,k,x);
case  3 :
return min_key__3016.call(this,k,x,y);
default:
return min_key__3017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3017.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3023 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3024 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3021 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3021))
{var s__3022 = temp__3726__auto____3021;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3022),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3022)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3023.call(this,n,step);
case  3 :
return partition_all__3024.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3026 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3026))
{var s__3027 = temp__3726__auto____3026;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3027))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3027),take_while.call(null,pred,cljs.core.rest.call(null,s__3027)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1, and end
* to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3028 = (function (){
return cljs.core.iterate.call(null,cljs.core.inc,0);
});
var range__3029 = (function (end){
return range.call(null,0,end,1);
});
var range__3030 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3031 = (function (start,end,step){
return cljs.core.take_while.call(null,(function (n){
return cljs.core._LT_.call(null,n,end);
}),cljs.core.iterate.call(null,(function (x){
return cljs.core._PLUS_.call(null,x,step);
}),start));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3028.call(this);
case  1 :
return range__3029.call(this,start);
case  2 :
return range__3030.call(this,start,end);
case  3 :
return range__3031.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3033 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3033))
{var s__3034 = temp__3726__auto____3033;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3034),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3034)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3036 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3036))
{var s__3037 = temp__3726__auto____3036;

var fst__3038 = cljs.core.first.call(null,s__3037);
var fv__3039 = f.call(null,fst__3038);
var run__3040 = cljs.core.cons.call(null,fst__3038,cljs.core.take_while.call(null,(function (p1__3035_SHARP_){
return cljs.core._EQ_.call(null,fv__3039,f.call(null,p1__3035_SHARP_));
}),cljs.core.next.call(null,s__3037)));

return cljs.core.cons.call(null,run__3040,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3040),s__3037))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3055 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3051 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3051))
{var s__3052 = temp__3723__auto____3051;

return reductions.call(null,f,cljs.core.first.call(null,s__3052),cljs.core.rest.call(null,s__3052));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3056 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3053 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3053))
{var s__3054 = temp__3726__auto____3053;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3054)),cljs.core.rest.call(null,s__3054));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3055.call(this,f,init);
case  3 :
return reductions__3056.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3059 = (function (f){
return (function() {
var G__3064 = null;
var G__3064__3065 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3064__3066 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3064__3067 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3064__3068 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3064__3069 = (function() { 
var G__3071__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3071 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3071__delegate.call(this, x, y, z, args);
};
G__3071.cljs$lang$maxFixedArity = 3;
G__3071.cljs$lang$applyTo = (function (arglist__3072){
var x = cljs.core.first(arglist__3072);
var y = cljs.core.first(cljs.core.next(arglist__3072));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3072)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3072)));
return G__3071__delegate.call(this, x, y, z, args);
});
return G__3071;
})()
;
G__3064 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3064__3065.call(this);
case  1 :
return G__3064__3066.call(this,x);
case  2 :
return G__3064__3067.call(this,x,y);
case  3 :
return G__3064__3068.call(this,x,y,z);
default:
return G__3064__3069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3064.cljs$lang$maxFixedArity = 3;
G__3064.cljs$lang$applyTo = G__3064__3069.cljs$lang$applyTo;
return G__3064;
})()
});
var juxt__3060 = (function (f,g){
return (function() {
var G__3073 = null;
var G__3073__3074 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3073__3075 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3073__3076 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3073__3077 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3073__3078 = (function() { 
var G__3080__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3080__delegate.call(this, x, y, z, args);
};
G__3080.cljs$lang$maxFixedArity = 3;
G__3080.cljs$lang$applyTo = (function (arglist__3081){
var x = cljs.core.first(arglist__3081);
var y = cljs.core.first(cljs.core.next(arglist__3081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3081)));
return G__3080__delegate.call(this, x, y, z, args);
});
return G__3080;
})()
;
G__3073 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3073__3074.call(this);
case  1 :
return G__3073__3075.call(this,x);
case  2 :
return G__3073__3076.call(this,x,y);
case  3 :
return G__3073__3077.call(this,x,y,z);
default:
return G__3073__3078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3073.cljs$lang$maxFixedArity = 3;
G__3073.cljs$lang$applyTo = G__3073__3078.cljs$lang$applyTo;
return G__3073;
})()
});
var juxt__3061 = (function (f,g,h){
return (function() {
var G__3082 = null;
var G__3082__3083 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3082__3084 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3082__3085 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3082__3086 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3082__3087 = (function() { 
var G__3089__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3089 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3089__delegate.call(this, x, y, z, args);
};
G__3089.cljs$lang$maxFixedArity = 3;
G__3089.cljs$lang$applyTo = (function (arglist__3090){
var x = cljs.core.first(arglist__3090);
var y = cljs.core.first(cljs.core.next(arglist__3090));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3090)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3090)));
return G__3089__delegate.call(this, x, y, z, args);
});
return G__3089;
})()
;
G__3082 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3082__3083.call(this);
case  1 :
return G__3082__3084.call(this,x);
case  2 :
return G__3082__3085.call(this,x,y);
case  3 :
return G__3082__3086.call(this,x,y,z);
default:
return G__3082__3087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3082.cljs$lang$maxFixedArity = 3;
G__3082.cljs$lang$applyTo = G__3082__3087.cljs$lang$applyTo;
return G__3082;
})()
});
var juxt__3062 = (function() { 
var G__3091__delegate = function (f,g,h,fs){
var fs__3058 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3092 = null;
var G__3092__3093 = (function (){
return cljs.core.reduce.call(null,(function (p1__3041_SHARP_,p2__3042_SHARP_){
return cljs.core.conj.call(null,p1__3041_SHARP_,p2__3042_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3058);
});
var G__3092__3094 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3043_SHARP_,p2__3044_SHARP_){
return cljs.core.conj.call(null,p1__3043_SHARP_,p2__3044_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3058);
});
var G__3092__3095 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3045_SHARP_,p2__3046_SHARP_){
return cljs.core.conj.call(null,p1__3045_SHARP_,p2__3046_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3058);
});
var G__3092__3096 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3047_SHARP_,p2__3048_SHARP_){
return cljs.core.conj.call(null,p1__3047_SHARP_,p2__3048_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3058);
});
var G__3092__3097 = (function() { 
var G__3099__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3049_SHARP_,p2__3050_SHARP_){
return cljs.core.conj.call(null,p1__3049_SHARP_,cljs.core.apply.call(null,p2__3050_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3058);
};
var G__3099 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3099__delegate.call(this, x, y, z, args);
};
G__3099.cljs$lang$maxFixedArity = 3;
G__3099.cljs$lang$applyTo = (function (arglist__3100){
var x = cljs.core.first(arglist__3100);
var y = cljs.core.first(cljs.core.next(arglist__3100));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3100)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3100)));
return G__3099__delegate.call(this, x, y, z, args);
});
return G__3099;
})()
;
G__3092 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3092__3093.call(this);
case  1 :
return G__3092__3094.call(this,x);
case  2 :
return G__3092__3095.call(this,x,y);
case  3 :
return G__3092__3096.call(this,x,y,z);
default:
return G__3092__3097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3092.cljs$lang$maxFixedArity = 3;
G__3092.cljs$lang$applyTo = G__3092__3097.cljs$lang$applyTo;
return G__3092;
})()
};
var G__3091 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3091__delegate.call(this, f, g, h, fs);
};
G__3091.cljs$lang$maxFixedArity = 3;
G__3091.cljs$lang$applyTo = (function (arglist__3101){
var f = cljs.core.first(arglist__3101);
var g = cljs.core.first(cljs.core.next(arglist__3101));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3101)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3101)));
return G__3091__delegate.call(this, f, g, h, fs);
});
return G__3091;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3059.call(this,f);
case  2 :
return juxt__3060.call(this,f,g);
case  3 :
return juxt__3061.call(this,f,g,h);
default:
return juxt__3062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3062.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3103 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3106 = cljs.core.next.call(null,coll);
coll = G__3106;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3104 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3102 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3102))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3102;
}
})()))
{{
var G__3107 = cljs.core.dec.call(null,n);
var G__3108 = cljs.core.next.call(null,coll);
n = G__3107;
coll = G__3108;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3103.call(this,n);
case  2 :
return dorun__3104.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3109 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3110 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3109.call(this,n);
case  2 :
return doall__3110.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3112 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3112),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3112),1)))
{return cljs.core.first.call(null,matches__3112);
} else
{return cljs.core.vec.call(null,matches__3112);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3113 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3113)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3113),1)))
{return cljs.core.first.call(null,matches__3113);
} else
{return cljs.core.vec.call(null,matches__3113);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3114 = cljs.core.re_find.call(null,re,s);
var match_idx__3115 = s.search(re);
var match_str__3116 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3114))?cljs.core.first.call(null,match_data__3114):match_data__3114);
var post_match__3117 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3115,cljs.core.count.call(null,match_str__3116)));

if(cljs.core.truth_(match_data__3114))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3114,re_seq.call(null,re,post_match__3117));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3118_SHARP_){
return print_one.call(null,p1__3118_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3119 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3119))
{var and__3574__auto____3122 = (function (){var x__105__auto____3120 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3121 = x__105__auto____3120;

if(cljs.core.truth_(and__3574__auto____3121))
{return x__105__auto____3120.cljs$core$IMeta$;
} else
{return and__3574__auto____3121;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__105__auto____3120);
}
})();

if(cljs.core.truth_(and__3574__auto____3122))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3122;
}
} else
{return and__3574__auto____3119;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__105__auto____3123 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3124 = x__105__auto____3123;

if(cljs.core.truth_(and__3574__auto____3124))
{return x__105__auto____3123.cljs$core$IPrintable$;
} else
{return and__3574__auto____3124;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__105__auto____3123);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3125 = cljs.core.first.call(null,objs);
var sb__3126 = (new goog.string.StringBuffer());

var G__3127__3128 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3127__3128))
{var obj__3129 = cljs.core.first.call(null,G__3127__3128);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3129,first_obj__3125)))
{} else
{sb__3126.append(" ");
}
var G__3130__3131 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3129,opts));

while(true){
if(cljs.core.truth_(G__3130__3131))
{var string__3132 = cljs.core.first.call(null,G__3130__3131);

sb__3126.append(string__3132);
{
var G__3133 = cljs.core.next.call(null,G__3130__3131);
G__3130__3131 = G__3133;
continue;
}
} else
{}
break;
}
{
var G__3134 = cljs.core.next.call(null,G__3127__3128);
G__3127__3128 = G__3134;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3126);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3135 = cljs.core.first.call(null,objs);

var G__3136__3137 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3136__3137))
{var obj__3138 = cljs.core.first.call(null,G__3136__3137);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3138,first_obj__3135)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3139__3140 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3138,opts));

while(true){
if(cljs.core.truth_(G__3139__3140))
{var string__3141 = cljs.core.first.call(null,G__3139__3140);

cljs.core.string_print.call(null,string__3141);
{
var G__3142 = cljs.core.next.call(null,G__3139__3140);
G__3139__3140 = G__3142;
continue;
}
} else
{}
break;
}
{
var G__3143 = cljs.core.next.call(null,G__3136__3137);
G__3136__3137 = G__3143;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3144){
var objs = cljs.core.seq( arglist__3144 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3145){
var objs = cljs.core.seq( arglist__3145 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3146){
var objs = cljs.core.seq( arglist__3146 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3147){
var objs = cljs.core.seq( arglist__3147 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3148){
var objs = cljs.core.seq( arglist__3148 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3149 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3149,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3150 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3150))
{var nspc__3151 = temp__3726__auto____3150;

return cljs.core.str.call(null,nspc__3151,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3152 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3152))
{var nspc__3153 = temp__3726__auto____3152;

return cljs.core.str.call(null,nspc__3153,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3154 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3154,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3155 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3155.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3156 = this;
return this__3156.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3157 = this;
return this__3157.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3158 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3165 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3166 = (function() { 
var G__3168__delegate = function (x,p__3159){
var map__3160__3161 = p__3159;
var map__3160__3162 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3160__3161))?cljs.core.apply.call(null,cljs.core.hash_map,map__3160__3161):map__3160__3161);
var validator__3163 = cljs.core.get.call(null,map__3160__3162,"﷐'validator");
var meta__3164 = cljs.core.get.call(null,map__3160__3162,"﷐'meta");

return (new cljs.core.Atom(x,meta__3164,validator__3163));
};
var G__3168 = function (x,var_args){
var p__3159 = null;
if (goog.isDef(var_args)) {
  p__3159 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3168__delegate.call(this, x, p__3159);
};
G__3168.cljs$lang$maxFixedArity = 1;
G__3168.cljs$lang$applyTo = (function (arglist__3169){
var x = cljs.core.first(arglist__3169);
var p__3159 = cljs.core.rest(arglist__3169);
return G__3168__delegate.call(this, x, p__3159);
});
return G__3168;
})()
;
atom = function(x,var_args){
var p__3159 = var_args;
switch(arguments.length){
case  1 :
return atom__3165.call(this,x);
default:
return atom__3166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3166.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3170 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3170))
{var v__3171 = temp__3726__auto____3170;

if(cljs.core.truth_(v__3171.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3172 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3173 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3174 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3175 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3176 = (function() { 
var G__3178__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3178 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3178__delegate.call(this, a, f, x, y, z, more);
};
G__3178.cljs$lang$maxFixedArity = 5;
G__3178.cljs$lang$applyTo = (function (arglist__3179){
var a = cljs.core.first(arglist__3179);
var f = cljs.core.first(cljs.core.next(arglist__3179));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3179)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3179))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3179)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3179)))));
return G__3178__delegate.call(this, a, f, x, y, z, more);
});
return G__3178;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3172.call(this,a,f);
case  3 :
return swap_BANG___3173.call(this,a,f,x);
case  4 :
return swap_BANG___3174.call(this,a,f,x,y);
case  5 :
return swap_BANG___3175.call(this,a,f,x,y,z);
default:
return swap_BANG___3176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3176.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3180){
var iref = cljs.core.first(arglist__3180);
var f = cljs.core.first(cljs.core.next(arglist__3180));
var args = cljs.core.rest(cljs.core.next(arglist__3180));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3181 = (function (){
return gensym.call(null,"G__");
});
var gensym__3182 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3181.call(this);
case  1 :
return gensym__3182.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3184 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3184.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3185 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3185.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3185.state,this__3185.f);
}
return cljs.core.deref.call(null,this__3185.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3186){
var body = cljs.core.seq( arglist__3186 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3187__3188 = options;
var map__3187__3189 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3187__3188))?cljs.core.apply.call(null,cljs.core.hash_map,map__3187__3188):map__3187__3188);
var keywordize_keys__3190 = cljs.core.get.call(null,map__3187__3189,"﷐'keywordize-keys");
var keyfn__3191 = (cljs.core.truth_(keywordize_keys__3190)?cljs.core.keyword:cljs.core.str);
var f__3197 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__159__auto____3196 = (function iter__3192(s__3193){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3193__3194 = s__3193;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3193__3194)))
{var k__3195 = cljs.core.first.call(null,s__3193__3194);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3191.call(null,k__3195),thisfn.call(null,(x[k__3195]))]),iter__3192.call(null,cljs.core.rest.call(null,s__3193__3194)));
} else
{return null;
}
break;
}
})));
});

return iter__159__auto____3196.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3197.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3198){
var x = cljs.core.first(arglist__3198);
var options = cljs.core.rest(arglist__3198);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3199 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3203__delegate = function (args){
var temp__3723__auto____3200 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3199),args);

if(cljs.core.truth_(temp__3723__auto____3200))
{var v__3201 = temp__3723__auto____3200;

return v__3201;
} else
{var ret__3202 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3199,cljs.core.assoc,args,ret__3202);
return ret__3202;
}
};
var G__3203 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3203__delegate.call(this, args);
};
G__3203.cljs$lang$maxFixedArity = 0;
G__3203.cljs$lang$applyTo = (function (arglist__3204){
var args = cljs.core.seq( arglist__3204 );;
return G__3203__delegate.call(this, args);
});
return G__3203;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3206 = (function (f){
while(true){
var ret__3205 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3205)))
{{
var G__3209 = ret__3205;
f = G__3209;
continue;
}
} else
{return ret__3205;
}
break;
}
});
var trampoline__3207 = (function() { 
var G__3210__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3210 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3210__delegate.call(this, f, args);
};
G__3210.cljs$lang$maxFixedArity = 1;
G__3210.cljs$lang$applyTo = (function (arglist__3211){
var f = cljs.core.first(arglist__3211);
var args = cljs.core.rest(arglist__3211);
return G__3210__delegate.call(this, f, args);
});
return G__3210;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3206.call(this,f);
default:
return trampoline__3207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3207.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3212 = (function (){
return rand.call(null,1);
});
var rand__3213 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3212.call(this);
case  1 :
return rand__3213.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3215 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3215,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3215,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3224 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3225 = (function (h,child,parent){
var or__3576__auto____3216 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3216))
{return or__3576__auto____3216;
} else
{var or__3576__auto____3217 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3217))
{return or__3576__auto____3217;
} else
{var and__3574__auto____3218 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3218))
{var and__3574__auto____3219 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3219))
{var and__3574__auto____3220 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3220))
{var ret__3221 = true;
var i__3222 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3223 = cljs.core.not.call(null,ret__3221);

if(cljs.core.truth_(or__3576__auto____3223))
{return or__3576__auto____3223;
} else
{return cljs.core._EQ_.call(null,i__3222,cljs.core.count.call(null,parent));
}
})()))
{return ret__3221;
} else
{{
var G__3227 = isa_QMARK_.call(null,h,child.call(null,i__3222),parent.call(null,i__3222));
var G__3228 = cljs.core.inc.call(null,i__3222);
ret__3221 = G__3227;
i__3222 = G__3228;
continue;
}
}
break;
}
} else
{return and__3574__auto____3220;
}
} else
{return and__3574__auto____3219;
}
} else
{return and__3574__auto____3218;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3224.call(this,h,child);
case  3 :
return isa_QMARK___3225.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3229 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3230 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3229.call(this,h);
case  2 :
return parents__3230.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3232 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3233 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3232.call(this,h);
case  2 :
return ancestors__3233.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3235 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3236 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3235.call(this,h);
case  2 :
return descendants__3236.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3246 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3247 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3241 = "﷐'parents".call(null,h);
var td__3242 = "﷐'descendants".call(null,h);
var ta__3243 = "﷐'ancestors".call(null,h);
var tf__3244 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3245 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3241.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3243.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3243.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3241,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3244.call(null,"﷐'ancestors".call(null,h),tag,td__3242,parent,ta__3243),"﷐'descendants":tf__3244.call(null,"﷐'descendants".call(null,h),parent,ta__3243,tag,td__3242)});
})());

if(cljs.core.truth_(or__3576__auto____3245))
{return or__3576__auto____3245;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3246.call(this,h,tag);
case  3 :
return derive__3247.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3253 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3254 = (function (h,tag,parent){
var parentMap__3249 = "﷐'parents".call(null,h);
var childsParents__3250 = (cljs.core.truth_(parentMap__3249.call(null,tag))?cljs.core.disj.call(null,parentMap__3249.call(null,tag),parent):cljs.core.set([]));
var newParents__3251 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3250))?cljs.core.assoc.call(null,parentMap__3249,tag,childsParents__3250):cljs.core.dissoc.call(null,parentMap__3249,tag));
var deriv_seq__3252 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3238_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3238_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3238_SHARP_),cljs.core.second.call(null,p1__3238_SHARP_)));
}),cljs.core.seq.call(null,newParents__3251)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3249.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3239_SHARP_,p2__3240_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3239_SHARP_,p2__3240_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3252));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3253.call(this,h,tag);
case  3 :
return underive__3254.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3256 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3258 = (cljs.core.truth_((function (){var and__3574__auto____3257 = xprefs__3256;

if(cljs.core.truth_(and__3574__auto____3257))
{return xprefs__3256.call(null,y);
} else
{return and__3574__auto____3257;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3258))
{return or__3576__auto____3258;
} else
{var or__3576__auto____3260 = (function (){var ps__3259 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3259))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3259),prefer_table)))
{} else
{}
{
var G__3263 = cljs.core.rest.call(null,ps__3259);
ps__3259 = G__3263;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3260))
{return or__3576__auto____3260;
} else
{var or__3576__auto____3262 = (function (){var ps__3261 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3261))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3261),y,prefer_table)))
{} else
{}
{
var G__3264 = cljs.core.rest.call(null,ps__3261);
ps__3261 = G__3264;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3262))
{return or__3576__auto____3262;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3265 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3265))
{return or__3576__auto____3265;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3274 = cljs.core.reduce.call(null,(function (be,p__3266){
var vec__3267__3268 = p__3266;
var k__3269 = cljs.core.nth.call(null,vec__3267__3268,0,null);
var ___3270 = cljs.core.nth.call(null,vec__3267__3268,1,null);
var e__3271 = vec__3267__3268;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3269)))
{var be2__3273 = (cljs.core.truth_((function (){var or__3576__auto____3272 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3272))
{return or__3576__auto____3272;
} else
{return cljs.core.dominates.call(null,k__3269,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3271:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3273),k__3269,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3269," and ",cljs.core.first.call(null,be2__3273),", and neither is preferred");
}
return be2__3273;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3274))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3274));
return cljs.core.second.call(null,best_entry__3274);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3275 = mf;

if(cljs.core.truth_(and__3574__auto____3275))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3275;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3276 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3276))
{return or__3576__auto____3276;
} else
{return (_reset["_"]);
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3277 = mf;

if(cljs.core.truth_(and__3574__auto____3277))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3277;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3278 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3278))
{return or__3576__auto____3278;
} else
{return (_add_method["_"]);
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3279 = mf;

if(cljs.core.truth_(and__3574__auto____3279))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3279;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3280 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3280))
{return or__3576__auto____3280;
} else
{return (_remove_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3281 = mf;

if(cljs.core.truth_(and__3574__auto____3281))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3281;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3282 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3282))
{return or__3576__auto____3282;
} else
{return (_prefer_method["_"]);
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3283 = mf;

if(cljs.core.truth_(and__3574__auto____3283))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3283;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3284 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3284))
{return or__3576__auto____3284;
} else
{return (_get_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3285 = mf;

if(cljs.core.truth_(and__3574__auto____3285))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3285;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3286 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3286))
{return or__3576__auto____3286;
} else
{return (_methods["_"]);
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3287 = mf;

if(cljs.core.truth_(and__3574__auto____3287))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3287;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3288 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3288))
{return or__3576__auto____3288;
} else
{return (_prefers["_"]);
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3289 = mf;

if(cljs.core.truth_(and__3574__auto____3289))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3289;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3290 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3290))
{return or__3576__auto____3290;
} else
{return (_invoke["_"]);
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3291 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3292 = cljs.core._get_method.call(null,mf,dispatch_val__3291);

if(cljs.core.truth_(target_fn__3292))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3291);
}
return cljs.core.apply.call(null,target_fn__3292,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3293 = this;
cljs.core.swap_BANG_.call(null,this__3293.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3293.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3293.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3293.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3294 = this;
cljs.core.swap_BANG_.call(null,this__3294.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3294.method_cache,this__3294.method_table,this__3294.cached_hierarchy,this__3294.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3295 = this;
cljs.core.swap_BANG_.call(null,this__3295.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3295.method_cache,this__3295.method_table,this__3295.cached_hierarchy,this__3295.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3296 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3296.cached_hierarchy),cljs.core.deref.call(null,this__3296.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3296.method_cache,this__3296.method_table,this__3296.cached_hierarchy,this__3296.hierarchy);
}
var temp__3723__auto____3297 = cljs.core.deref.call(null,this__3296.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3297))
{var target_fn__3298 = temp__3723__auto____3297;

return target_fn__3298;
} else
{var temp__3723__auto____3299 = cljs.core.find_and_cache_best_method.call(null,this__3296.name,dispatch_val,this__3296.hierarchy,this__3296.method_table,this__3296.prefer_table,this__3296.method_cache,this__3296.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3299))
{var target_fn__3300 = temp__3723__auto____3299;

return target_fn__3300;
} else
{return cljs.core.deref.call(null,this__3296.method_table).call(null,this__3296.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3301 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3301.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3301.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3301.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3301.method_cache,this__3301.method_table,this__3301.cached_hierarchy,this__3301.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3302 = this;
return cljs.core.deref.call(null,this__3302.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3303 = this;
return cljs.core.deref.call(null,this__3303.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3304 = this;
return cljs.core.do_invoke.call(null,mf,this__3304.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3305__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3305 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3305__delegate.call(this, _, args);
};
G__3305.cljs$lang$maxFixedArity = 1;
G__3305.cljs$lang$applyTo = (function (arglist__3306){
var _ = cljs.core.first(arglist__3306);
var args = cljs.core.rest(arglist__3306);
return G__3305__delegate.call(this, _, args);
});
return G__3305;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
