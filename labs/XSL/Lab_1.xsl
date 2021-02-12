<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html><head><title></title></head>
<style>table, td, th {border: 3px solid black}</style>
<body>
<table>
<thead>
<th>
Студент
</th>
<xsl:for-each select="/таблица/студент[1]/отметка/@дисциплина">
<th>
<xsl:value-of select="."/>
</th>
</xsl:for-each>
</thead>
<xsl:for-each select="/таблица/студент">
<tr>
<td>
<xsl:value-of select="@имя"/>
</td>
<xsl:for-each select="./отметка">
<td>
<xsl:value-of select="."/>
</td>
</xsl:for-each>
</tr>
</xsl:for-each>
</table>
</body></html>
</xsl:template>
</xsl:stylesheet>
