var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType("adamj/firstblock", {
    edit: function(){
        return createElement("p", {
            className: "class",
        }, "Edit");
    },
    save: function() {
        return <p className="class">Save JSX</p>;
    },
});