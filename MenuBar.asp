<%for(var i=0,btn; btn=d[i]; i++){%>
<li id="<%=btn.id%>">
    <svg class="icon <%=btn.className?btn.className:""%>"><use xlink:href="#<%=btn.icon%>" xlink:role="<%=btn.url%>"/></svg>
	<span><%=btn.name%></span>
</li>
<%}%>
